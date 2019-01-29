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
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
        type: 'OAuth2',
        user: process.env.emailAddress,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        refreshToken: process.env.refreshToken,
        accessToken: process.env.accessToken
    }
});
  transporter.sendMail({
    from: req.body.email,
    to: process.env.emailAddress, 
    subject: `${req.body.name}, ${req.body.email}`, 
    text: req.body.comments,
  })
  .then(info => {
    console.log(info, req.body.email)
    res.redirect('/contact')
  } )
  .catch(error => console.log('Error',error));
});


module.exports = router;


