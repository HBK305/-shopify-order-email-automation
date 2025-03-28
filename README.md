# 🛍️ Shopify Order Email Automation

This is a simple demo project that automates email replies for Shopify orders using Node.js and SendGrid.

## ✨ Features

- Receives a simulated Shopify `orders/create` webhook
- Parses customer name, email, order items, and total
- Sends a personalized confirmation email automatically

## 🧰 Tech Stack

- Node.js / Express
- SendGrid API
- Shopify Webhooks (simulated)
- Axios (for testing webhook)

## 📦 Project Structure

├── index.js → Main Express server
├── send_test.js → Simulate Shopify webhook
├── webhook_sample.json → Example order payload
├── .env.example → Environment variables template
└── README.md → You're reading it!
