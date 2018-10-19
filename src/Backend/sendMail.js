var mailSend = function mailSend(email, body) {
  var nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
    service:'gmail',
    port: 25,
    secure: false,
    auth:{
      user: 'medappservice@gmail.com',
      pass: 'utsaip2018'
    }
  })
  let mailOptions = {
    from: '"Medappservice" <medappservice@gmail.com>',
    to: email,
    subject: 'MedApp: Appointment reminder',
    text: body
  };
  transporter.sendMail(mailOptions,(error,info) => {
    if(error){
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });
}

module.exports.mailSend = mailSend;
