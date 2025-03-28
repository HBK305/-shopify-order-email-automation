const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/webhook', async (req, res) => {
  const order = req.body;
  const customerName = order.customer.first_name;
  const email = order.email;
  const items = order.line_items.map(item => `${item.quantity} x ${item.title}`).join(', ');
  const total = order.total_price;

  const msg = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: `Thanks for your order, ${customerName}!`,
    text: `Hi ${customerName},\n\nThanks for ordering: ${items}.\nTotal: $${total}.\n\nWe'll keep you posted on the shipping!\n\nCheers,\nThe Team`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent to", email);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send('Error sending email');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
