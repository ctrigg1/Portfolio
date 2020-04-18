const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

exports.addAdmin = functions.https.onCall((data, context) => {

  if(context.auth.token.admin){
    return admin.auth().getUserByEmail(data.email).then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      })
    }).then(() => {
      return {
        message: `Success! ${data.email} has been made an admin`
      }
    }).catch(err => {
      return err;
    })
  }else{
    return {
      message: 'Only administrators can add other administrators'
    }
  }
})

exports.contactEmail = functions.https.onCall((data, context) => {

  return new Promise((resolve, reject) => {

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ctl.coding@gmail.com',
        pass: 'qrrzfhvtjommmmzt'
      }
    });

    const mailOptions = {
      from: `${data.email}`,
      to: "ctl.coding@gmail.com",
      subject: 'Website Inquiry',
      html: `<p>From: ${data.email} <br> ${data.body}</p>`,
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if(err){
        console.log(err);
        reject ({message: 'the server is down, please try again later'});
      } else {
        console.log(info);
        resolve ({message: 'the message was sent successfully, thanks!'});
      }
    })
  })
})

