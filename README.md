README for Frontend & Backend
📄 README.md 

md
Copy
Edit
# 🏥 BabySteps Appointment Booking System

A **full-stack** prenatal care **appointment booking system** built with:
- **Frontend**: React.js (with React Hooks & Axios)
- **Backend**: Node.js, Express.js, MongoDB
- **Styling**: Plain CSS
- **API**: RESTful API for managing doctors and appointments

---

## **📌 Features**
✅ View available doctors  
✅ Check available appointment slots  
✅ Book, update, and cancel appointments  
✅ Prevents double bookings  
✅ Simple and clean UI  

---

## **🛠 Tech Stack**
### **Frontend**
- React.js (React Router, Axios)
- Plain CSS (`styles.css` for global styles)

### **Backend**
- Node.js, Express.js
- MongoDB & Mongoose
- dotenv (for environment variables)
- body-parser, cors (for API handling)

---

# 🚀 **Getting Started**

## **🔹 1. Clone the Repository**
```sh
git clone https://github.com/1919SaiRam/Advanced-Babysteps-Appointment-Booking-System.git
cd babysteps-appointment-system
🔹 2. Setup & Run the Backend
📌 Move into the backend folder:

sh
Copy
Edit
cd backend
Install Dependencies
sh
Copy
Edit
npm install
Set Up Environment Variables
Create a .env file inside backend/:

ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/babysteps
PORT=5000
Start MongoDB
Ensure MongoDB is running:

sh
Copy
Edit
mongod
Run Backend Server
sh
Copy
Edit
npm start
OR (if using nodemon)

sh
Copy
Edit
npx nodemon server.js
✅ Backend is now running at http://localhost:5000

🔹 3. Setup & Run the Frontend
📌 Move into the frontend folder:

sh
Copy
Edit
cd ../frontend
Install Dependencies
sh
Copy
Edit
npm install
Start React App
sh
Copy
Edit
npm start
✅ Frontend is now running at http://localhost:3000

📌 API Endpoints
🔹 Doctor API
Method	Endpoint	Description
GET	/doctors	Get all doctors
GET	/doctors/:id/slots?date=YYYY-MM-DD	Get available slots
🔹 Appointment API
Method	Endpoint	Description
GET	/appointments	Get all appointments
GET	/appointments/:id	Get appointment details
POST/appointments	Book an appointment
PUT	/appointments/:id	Update an appointment
DELETE	/appointments/:id	Cancel an appointment
📌 Screenshots
📷 Add screenshots here (e.g., homepage, booking page)

📌 Troubleshooting
❌ Frontend not connecting to backend?
✅ Ensure backend is running on http://localhost:5000

❌ MongoDB connection error?
✅ Check if mongod is running

❌ Port already in use?
✅ Use npx kill-port 5000 to free up the port



