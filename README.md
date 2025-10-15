<h1 align="center">📝 NoteVault</h1>

<p align="center">
  <em>A modern, secure notes app built with <b>React</b>, <b>Node.js</b>, <b>Express</b>, and <b>MySQL</b>.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge" alt="Build" />
  <img src="https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge" alt="Stack" />
  <img src="https://img.shields.io/badge/Database-MySQL-orange?style=for-the-badge" alt="Database" />
  <img src="https://img.shields.io/badge/Auth-JWT-yellow?style=for-the-badge" alt="Auth" />
</p>

---

## ✨ Overview

**NoteVault** is a **secure note-taking web app** that lets users register, log in, and manage personal notes safely.  
Built with the **MERN Stack (MySQL instead of MongoDB)**, it features **JWT authentication**, **CRUD operations**, and a **clean, responsive UI**.

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGdnZDJyNzRxa3Jnd3h3NnZldWdwOGtnN2p6czZ6eWNwcGducmVuciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JIX9t2j0ZTN9S/giphy.gif" width="450" />
</p>

---

## 🚀 Features

🎯 **Authentication System** – Register, Login, Logout using JWT  
🗒️ **CRUD Notes** – Create, Edit, Delete notes easily  
📌 **Pin & Unpin Notes** – Highlight important ones  
🔍 **Search Notes** – Quick filtering by keyword  
🌓 **Dark / Light Theme** – Save user preference  
💾 **MySQL Database** – Secure and relational data storage  
📱 **Responsive Design** – Works perfectly on any device  

---

## 🧠 Tech Stack

| Layer | Tech Used |
|-------|------------|
| 🎨 **Frontend** | React, Context API, React Router, CSS3 |
| ⚙️ **Backend** | Node.js, Express.js |
| 🗄️ **Database** | MySQL (with mysql2 or Sequelize ORM) |
| 🔑 **Auth** | JSON Web Token (JWT), bcrypt.js |
| 🚀 **Deployment** | Render (Backend) + Vercel (Frontend) |

---

## 🧩 Folder Structure

```bash
notevault/
│
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   ├── package.json
│   └── .env
│
└── README.md
