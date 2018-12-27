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
        clientId: '199652032781-aqu8uk1hgtgiu01r3j2ckj477vd5ug71.apps.googleusercontent.com',
        clientSecret: 'x0TW_nk6UuebtFBg5e3SJBm-',
        refreshToken: '1/E3Q7y4TraN5BAqL1r1SdDO0knor9b0UDJTTn6rj0jIM',
        accessToken: 'ya29.GluABsc1FLhp9GNH-xRwQOcfINSXYk6_xUY7Ik-tt56hxjtYauktY1a6d32NoHdT7YIQMdSTIq0dOfA8vf7aRfhIeDQXsbkur-hPH9BlzAkmDH7mznB-av4q_0_F',
    }
});
  transporter.sendMail({
    from: email,
    to: 'rstsmg1@gmail.com', 
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


