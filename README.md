🚀 Xeno CRM Platform
Welcome to the Xeno CRM Platform — a full-stack customer relationship management system designed to help businesses manage their customers and marketing campaigns in one place.

This project was built as a hands-on way to learn and apply full-stack development, combining a clean frontend with a powerful backend and database integration.

🛠️ What It Does
✅ Customer Management – Add, view, and organize customer info like name, email, phone, and segments.

📢 Campaign Creation – Build personalized campaigns and send them via Email, SMS, or Push Notification.

📊 Dashboard Insights – Get real-time stats like total customers, total campaigns, and active ones.

🤖 AI Insights (Prototype) – Includes basic sentiment analysis and campaign performance predictions.

🧱 Tech Stack
🔹 Frontend:
HTML, CSS (Tailwind)

Vanilla JavaScript

🔹 Backend:
Node.js with Express

REST API architecture

🔹 Database:
MySQL

🖥️ How to Run It Locally
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/xeno-crm-platform.git
cd xeno-crm-platform
2. Frontend
Just open index.html in your browser to preview the UI (for demo or testing). In production, you'd serve this from the backend or deploy via Vercel/Netlify.

3. Backend
Make sure you have Node.js and MySQL installed.

Set up backend:
bash
Copy
Edit
cd backend
npm install
Configure MySQL connection:
Edit your .env or config.js file with your MySQL credentials:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=xeno_crm
Run the server:
bash
Copy
Edit
npm start
💡 Future Ideas
Auth system with Google OAuth

Campaign scheduling and delivery tracking

Integration with third-party marketing APIs (Mailchimp, Twilio, etc.)

Better AI models for deeper analytics

