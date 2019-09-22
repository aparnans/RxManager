const express = require("express");
const PORT = 9002;

var app = express();

var nodemailer = require('nodemailer'); 

var db = require('./config/connection');
//var routes = require("./routes/apiRoutes")(app);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

db.authenticate()
 . then(() => {
     console.log('database connected');
 })
 .catch((err) => {
    console.log('Error connecting: '+err)
 });

//  async function sendEmail(){
//      console.log('Sending email');
//      var transporter = nodemailer.createTransport({
//         service: 'mail.yahoo.com',
//         port: 465,
//         requiresAuth:true,
//         domains: ['mail.yahoo.com', 'yahoo.com'],
//         secure:false,
//         auth: {
//           user: 'bgroup3project1@yahoo.com',
//           pass: 'Grp#3Prj1'
//         },
        

//         sendmail: true 
//       });
      
//       var mailOptions = {
//         from: 'bgroup3project1@yahoo.com',
//         to: 'aparna_ns@yahoo.com',
//         subject: 'Sending Email using Node.js',
//         text: 'That was easy!',
//         greetingTimeout: 60000
//       };

//       let info = await transporter.sendMail(mailOptions)

//       console.log(info)
//     //   transporter.sendMail(mailOptions, function(error, info){
//     //     if (error) {
//     //       console.log(error);
//     //     } else {
//     //       console.log('Email sent: ' + info.response);
//     //     }
//     //   });  
//       console.log('Email sent');
//  }

var transporter= nodemailer.createTransport(
        {
                 service: 'yahoo',
                 auth:
                 {
                        user: "bgroup3project1@yahoo.com",
                        pass: "Grp#3Prj1"
                 }
        });
        var mailOptions = {
            from: 'bgroup3project1@yahoo.com',
            to: 'aparnans@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy - atempt 3!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          
          
          
          //app.use(routes);

app.listen(PORT, () => {
    console.log("app is listening at "+PORT);
})