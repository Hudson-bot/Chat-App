**Introduction**

This is a real-time chat application that enables users to communicate instantly with each other. The app supports one-on-one and group messaging with real-time updates.

**Features**

1. User authentication (Signup/Login)

2. Real-time messaging

3. One-on-one chat and group chat

4. Online/offline user status

5. Typing indicators

6. Message notifications

7. Responsive design for mobile and desktop

**Technologies Used**

1. Frontend: React.js, Redux, Tailwind CSS

2. Backend: Node.js, Express.js

3. Database: MongoDB

4. Real-time Communication: Socket.io

5. Authentication: JWT (JSON Web Tokens)

6. Hosting: Render 

**Installation**

Prerequisites
1.  Make sure you have the following installed:
2.  Node.js
3.  MongoDB

**Steps to Run Locally**

1. Clone the repository:

git clone https://github.com/yourusername/chat-app.git
cd chat-app

2. Install dependencies for both frontend and backend:

cd backend
npm install
cd ../frontend
npm install

Configure environment variables:

Create a .env file in the backend directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000

3. Start the backend server:

cd backend
npm start

4. Start the frontend:

cd frontend
npm start

Open the app in your browser at http://localhost:3000.

**Deployment**

1. Frontend: Deploy on Render

2. Backend: Deploy on Render

3. Database: Use MongoDB Atlas for cloud storage

**Contributing** 

Pull requests are welcome! Please follow these steps:
Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m 'Add feature')
Push to the branch (git push origin feature-branch)
Open a pull request

**Contact**
For any questions or suggestions, feel free to reach out:

Email: gauravpanigrahy1421@gmail.com

GitHub: Hudon-Bot

