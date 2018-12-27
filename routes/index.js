const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/customers', (req, res, next) => {
  res.render('customers');
});


router.get('/services', (req, res, next) => {
  res.render('services');
});


router.get('/contact', (req, res, next) => {
  res.render('contact');
});

router.post('/send-email', (req, res, next) => {
  let { name, phoneNumber, email, comments } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure : false,
    port: 25,

    auth: {
      user: process.env.emailAddress,
      pass: process.env.emailPassword
    },
    tls : {
      rejectUnauthorized : false
    }
  });
  transporter.sendMail({
    from: email,
    to: process.env.emailAddress, 
    subject: `${name}, ${phoneNumber}`, 
    text: comments,
  })
  .then(info => {
    res.redirect('/contact')
    console.log(info)
  } )
  .catch(error => console.log('Error',error));
});


module.exports = router;


