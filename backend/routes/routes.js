const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors());

// Authentication of user
// const authentication = require('../authentication/auth');

// Middleware
const middleware = require('../middleware/validatingApi');

// Controller
const controllers = require('../controllers/userInformation');

// Sample API testing
app.get('/', (req, res) => {
  res.send({
     status:200,
     message:'App is working fine!'
  });
});

app.post('/twillo/send/message', [middleware.validateApi], (req, res, next) => {
  controllers.twilloSendSingleUserMessage(req, res);
});


module.exports = app;