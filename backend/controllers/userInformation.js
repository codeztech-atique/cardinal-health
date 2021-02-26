const chalk = require("chalk");
const config = require("config");
const accountSid = config.twillo.accountSid;
const authToken = config.twillo.authToken;

const client = require('twilio')(accountSid, authToken);

exports.twilloSendSingleUserMessage = (req, res, next) => {
  console.log(chalk.bgYellowBright("---------------- Send Single Person Message ----------------"));
  console.log(req.body);
  client.messages
  .create({
     body: req.body.textMessage,
     from: config.twillo.msgFrom,
     to: req.body.destination
   }).then(message => {
      console.log(message.sid);
      res.status(201).send({
         message: message
      })
   }).catch((err) => {
     res.status(400).send({
       error: err
     })
   });
}
