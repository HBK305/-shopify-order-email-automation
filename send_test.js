const axios = require('axios');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('webhook_sample.json', 'utf8'));

axios.post('http://localhost:3000/webhook', data)
  .then(response => {
    console.log('✅ Webhook sent successfully:', response.data);
  })
  .catch(error => {
    console.error('❌ Error sending webhook:', error.response?.data || error.message);
  });
