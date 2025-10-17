<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// ✅ Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // ✅ for JSON fetch requests

// ✅ Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// ✅ Contact Form POST Route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Transporter setup for Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,      // your Gmail
            pass: process.env.PASSWORD    // your Gmail App Password
        }
    });

    // Email details
    const mailOptions = {
        from: email,
        to: process.env.EMAIL, // your email (where message will arrive)
        subject: `📩 New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('✅ Thank you! Your message has been sent successfully.');
    } catch (err) {
        console.error('❌ Email send failed:', err);
        res.send('❌ Sorry, there was an error sending your message.');
    }
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
});
=======
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

const port = process.env.PORT || 3000;

// ✅ Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // ✅ for JSON fetch requests


// ✅ Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// ✅ Contact Form POST Route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Transporter setup for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,      // your Gmail
      pass: process.env.PASSWORD    // your Gmail App Password
    }
  });

  // Email details
  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // your email (where message will arrive)
    subject: `📩 New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('✅ Thank you! Your message has been sent successfully.');
  } catch (err) {
    console.error('❌ Email send failed:', err);
    res.send('❌ Sorry, there was an error sending your message.');
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
>>>>>>> bd5e271 (Add email backend integration)
