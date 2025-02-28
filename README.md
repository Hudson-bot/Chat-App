**Introduction**

This is a real-time chat application that enables users to communicate instantly with each other. The app supports one-on-one and group messaging with real-time updates.

Features

User authentication (Signup/Login)

Real-time messaging

One-on-one chat and group chat

Online/offline user status

Typing indicators

Message notifications

Responsive design for mobile and desktop

Technologies Used

Frontend: React.js, Redux, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Real-time Communication: Socket.io

Authentication: JWT (JSON Web Tokens)

Hosting: Vercel/Netlify (Frontend), Heroku/Render (Backend)

Installation

Prerequisites

Make sure you have the following installed:

Node.js

MongoDB

Steps to Run Locally

Clone the repository:

git clone https://github.com/yourusername/chat-app.git
cd chat-app

Install dependencies for both frontend and backend:

cd backend
npm install
cd ../frontend
npm install

Configure environment variables:

Create a .env file in the backend directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000

Start the backend server:

cd backend
npm start

Start the frontend:

cd frontend
npm start

Open the app in your browser at http://localhost:3000.

Deployment

Frontend: Deploy on Netlify/Vercel

Backend: Deploy on Heroku/Render

Database: Use MongoDB Atlas for cloud storage

Contributing

Pull requests are welcome! Please follow these steps:

Fork the repository

Create a new branch (git checkout -b feature-branch)

Commit your changes (git commit -m 'Add feature')

Push to the branch (git push origin feature-branch)

Open a pull request


Contact

For any questions or suggestions, feel free to reach out:

Email: gauravpanigrahy1421@gmail.com

GitHub: Hudon-Bot

