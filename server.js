const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Sequelize = require('sequelize');
const cors = require('cors');

app.use(cors());

/* app.use(bodyParser.urlencoded({ extended: false })); */
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

const sequelize = new Sequelize('blueby', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


const User = sequelize.define('users', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
  });
  

 
 
app.post('/SignUp', (req, res) => {
    const { name, email, password  } = req.body;
    User.create({ name, email, password })
      .then(user => res.json(user))
      .catch(error => res.status(500).json(error));
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Buscar el usuario en la base de datos
    const data = await User.findOne({ where: { email, password } });
  
    if (data.id) {
      // Si el usuario existe, generar un token de autenticación y enviarlo en la respuesta
     const authToken = generateAuthToken(User);
  
      res.redirect('/home');
  

    } else {
      res.status(401).send('Invalid username or password');
    }
  });
  
 /*  function generateAuthToken(user) {
    // Generar un token de autenticación único para el usuario
    // Esto podría hacerse utilizando una biblioteca de autenticación como JWT
    return 'AUTH_TOKEN_HERE';
  } */

  app.get('/home', authenticateToken, (req, res) => {
  
    res.render('home');
  });

  

  
  function generateAuthToken(userId) {
    const payload = { userId };
    const secret = 'true';
    const token = jwt.sign(payload, secret);
    return token
  }

  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, 'true', (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
 
  
app.listen(3000, () => console.log('Server running on port 3000'));
  
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });