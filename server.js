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
  
    const data = await User.findOne({ where: { email, password } });
  
    if (data) {
      const token = generateAuthToken(data);
      res.json({ token });
  
    } else {
      res.status(401).send('Invalid username or password');
    }
  });

  
  
  function generateAuthToken(userId) {
    const payload = { userId };
    const secret = 'true';
    const token = jwt.sign(payload, secret);
    return token
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

