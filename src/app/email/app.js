
var nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service:'imap.yandex.com',
  port: 993,
  secure: true,
  auth:{
    user: 'Medappservice@yandex.com',
    pass: 'utsaip2018'
  }
})
let mailOptions = {
  from: '"Medappservice" <Medappservice@yandex.com>',
  to: '6371747@qq.com',
  subject: 'Appointment reminding!',
  text: 'This is Medapp. Our doctor is looking forward to meeting you tomorrow!'
};
transporter.sendMail(mailOptions,(error,info) => {
  if(error){
    return console.log(error);
  }
  console.log("The message was sent!");
  console.log(info);
});
