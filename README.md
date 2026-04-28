# 🎮 API-GAMES

API REST desarrollada con Node.js, Express, JWT y Sequelize (SQLite).

---

## 📌 Descripción
Sistema de gestión de videojuegos con autenticación de usuarios y control de acceso mediante JWT.

---

## 🚀 Tecnologías
- Node.js
- Express
- Sequelize (ORM)
- SQLite
- JWT (JSON Web Token)

---

## 🔐 Autenticación
- Registro de usuarios
- Login con generación de token JWT
- Protección de rutas privadas

---

## 📡 Endpoints

### 🔑 Auth
- POST /api/auth/register
- POST /api/auth/login

### 🎮 Games
- GET /api/games
- POST /api/games (🔒 protegido)
- PUT /api/games/:id (🔒 protegido)
- DELETE /api/games/:id (🔒 protegido)

---

## ▶️ Instalación y ejecución

```bash
npm install
npm start


📂 Estructura del proyecto
src/
 ├── config
 ├── controllers
 ├── middlewares
 ├── models
 ├── routes
 ├── app.js
 └── server.js


 ✨ Mejoras implementadas
 Autenticación JWT
 Relación usuario → juegos
 Protección de rutas
 Uso de Sequelize ORM
 Manejo de errores básico