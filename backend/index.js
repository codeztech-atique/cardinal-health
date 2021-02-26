const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
app.options('*', cors());

app.use(bodyparser.json({limit: '5mb', extended: true}))
app.use(bodyparser.urlencoded({limit: '5mb', extended: true}))

const apiRoutes = require('./routes/routes');

app.use('', apiRoutes);


//Capture All 404 errors
app.use(function (req,res,next){
	res.status(404).send('Error - Unable to find the requested resource!');
});

// localhost:4000/asdfasdfasdf

app.use((req, res, next) => {
  req.socket.on('error', () => {});
  next();
});


module.exports = app;


