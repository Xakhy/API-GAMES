# 🎮 API-GAMES

API REST desarrollada con Node.js, Express, JWT y Sequelize (SQLite).

---

## 📌 Descripción
Sistema de gestión de videojuegos con autenticación de usuarios y control de acceso mediante JWT.  
Cada usuario puede registrarse, iniciar sesión y gestionar videojuegos mediante una API REST segura.

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
- Protección de rutas privadas mediante middleware

---

## 📡 Endpoints

### 🔑 Auth
- POST /api/auth/register → Registrar usuario
- POST /api/auth/login → Iniciar sesión

### 🎮 Games
- GET /api/games → Listar videojuegos
- POST /api/games → Crear videojuego (🔒 protegido)
- PUT /api/games/:id → Actualizar videojuego (🔒 protegido)
- DELETE /api/games/:id → Eliminar videojuego (🔒 protegido)

---

## 🧪 Pruebas de la API
La API fue probada utilizando Postman.

Se realizaron pruebas para:
- Registro de usuarios
- Login con JWT
- Creación de videojuegos
- Consulta de videojuegos
- Actualización y eliminación de registros
- Validación de rutas protegidas con token JWT

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