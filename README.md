# 🎓📚 EduPortal — School Management Application

A modern, scalable, and feature-rich **School Management System** built using the **MERN Stack**, styled with **Tailwind CSS & Material UI**, and powered by **AG Charts** for analytics.

EduPortal allows smooth management of **classes**, **teachers**, **students**, and includes a complete **analytics dashboard** for academic & financial insights.

---

## 🎥 Live Demo
**EduPortal App:** https://eduportal-self.vercel.app/

<p align="center">
  <img width="100%" src="https://github.com/user-attachments/assets/d9ecb48f-b669-45c0-a98f-0748159c1a0a" alt="EduPortal Dashboard Screenshot"/>
</p>

---

## 🚀 Tech Stack

| Layer        | Technology |
|------------- |-----------:|
| **Frontend** | React.js, Tailwind CSS, Material UI, Redux Toolkit, AG Charts |
| **Backend**  | Node.js, Express.js, MongoDB & Mongoose, JWT Authentication, Cloudinary (Image Uploads) |

---

## ⭐ Key Features

### 🔹 1. School Data Management

**Class**
- Class name & year  
- Assigned teacher  
- Student capacity  
- Student list  
- Fee details  

**Teacher**
- Personal details  
- Contact information  
- Salary  
- Assigned class  

**Student**
- Student profile  
- Contact info  
- Fee status  
- Class allocation  

---

### 🔹 2. Full CRUD Operations
CRUD available for:
- Classes  
- Teachers  
- Students  

Includes dynamic validation and reusable UI components.

---

### 🔹 3. Dynamic & Reusable UI Components
- Auto-generated input fields  
- Reusable form layouts  
- Fully responsive UI  

---

### 🔹 4. Class Capacity Restriction
Prevents adding students once the class maximum is reached.

---

### 🔹 5. Advanced Analytics Dashboard

**Class Analytics**
- Total students  
- Teacher details  
- Student distribution  
- Male/Female ratio  

**Financial Analytics**
- Monthly & yearly fees  
- Monthly & yearly teacher salaries  
- Month/Year toggle  

---

### 🎁 Extra Features
- 🔍 Search  
- 🔍 Sorting  
- 🔍 Filtering  
- 📄 Pagination  
- ✔️ Form validation  
- 🔐 JWT + Cookie authentication  
- ☁️ Cloudinary image uploads  

---

## 📦 Installation & Setup

> These commands assume you are using the repository structure:
> ```
> /EduPortal
>   /frontend
>   /backend
> ```


Make sure you have Node.js, npm, and MongoDB installed.

1️⃣ Clone the repository
git clone https://github.com/NatiqueAsghar/EduPortal.git

2️⃣ Navigate to the project
cd EduPortal

3️⃣ Install backend dependencies
cd backend
npm install

4️⃣ Install frontend dependencies
cd ../client
npm install

🔧 Environment Variables

Create a .env file inside the backend folder:

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- CLOUDINARY_CLOUD_NAME=your_cloud_name
- CLOUDINARY_API_KEY=your_api_key
- CLOUDINARY_API_SECRET=your_api_secret
- CLIENT_URL=http://localhost:5173
- PORT=5000


▶️ Running the Application
Start Backend Server

        cd backend
        npm run dev

Start Frontend (Vite)

        cd client
        npm run dev

Open in Browser
http://localhost:5173/

---
🙋‍♂️ Author

Made with ❤️ by Natique Asghar

If you found this project helpful, please ⭐ star the repository!

GitHub: https://github.com/NatiqueAsghar
