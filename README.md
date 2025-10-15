<!-- HEADER -->
<h1 align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920341.png" width="70px" />
  <br />
  📝 <span style="color:#4db8ff;">NoteVault</span>
</h1>

<h3 align="center">🔐 Secure. Simple. Smart.</h3>

<p align="center">
  <em>Store your thoughts safely — a full-stack, authentication-based notes app.</em>
</p>

---

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge&logo=readme&color=23d160" />
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=githubactions&color=00C851" />
  <img src="https://img.shields.io/badge/Stack-MERN%20(MySQL)-blueviolet?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Auth-JWT-yellow?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/UI-Responsive-ff69b4?style=for-the-badge&logo=css3" />
</p>

---

## 🌟 Overview

**NoteVault** is a modern, secure, and beautifully designed **Notes App** where users can **register, log in, and manage personal notes**.  
Built using the **MERN stack (React, Express, Node.js, and MySQL)** — with authentication powered by **JWT** — it focuses on simplicity, speed, and security.

---

## ⚡ Key Features

| 🚀 Feature | 💡 Description |
|------------|----------------|
| 🔐 **User Authentication** | Secure login & registration using JWT + bcrypt |
| 🗒️ **Create, Edit, Delete Notes** | Manage personal notes effortlessly |
| 📌 **Pin Notes** | Highlight important notes |
| 🔍 **Search & Filter** | Quickly find your saved notes |
| 🌓 **Dark/Light Mode** | Saves theme preferences |
| 💾 **MySQL Database** | Secure relational storage |
| 📱 **Fully Responsive UI** | Works seamlessly on mobile and desktop |

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nodejs,express,mysql,css,html,git" />
</p>

| Layer | Technologies |
|-------|---------------|
| 🎨 Frontend | React, React Router, Context API, CSS3 |
| ⚙️ Backend | Node.js, Express.js |
| 🗄️ Database | MySQL (mysql2 ORM) |
| 🔑 Authentication | JWT, bcrypt.js |
| ☁️ Deployment | Vercel (frontend), Render/Railway (backend) |

---

## 📂 Folder Structure

```bash
notevault/
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
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
│   └── .env
│
└── README.md
