# 🎮 API-GAMES

API REST + Frontend básico desarrollado con Node.js, Express, JWT, Sequelize (SQLite) y HTML/CSS/JS.

---

## 📌 Descripción

Sistema completo de gestión de videojuegos con autenticación de usuarios mediante JWT.

Incluye:
- 🔐 Backend seguro (API REST)
- 🎮 CRUD de videojuegos por usuario
- 🌐 Frontend básico (Login + Dashboard)
- 🧠 Relación entre usuarios y juegos

Cada usuario puede registrarse, iniciar sesión y gestionar sus videojuegos desde una interfaz web simple.

---

## 🚀 Tecnologías

### Backend
- Node.js
- Express
- Sequelize (ORM)
- SQLite
- JWT (JSON Web Token)
- bcryptjs

### Frontend
- HTML5
- CSS3 (UI moderna tipo dashboard)
- JavaScript (Fetch API)

---

## 🔐 Autenticación

- Registro de usuarios
- Login con JWT
- Token almacenado en `localStorage`
- Protección de rutas privadas

---

## 📡 Endpoints

### 🔑 Auth
POST /api/auth/register → Registrar usuario
POST /api/auth/login → Iniciar sesión



### 🎮 Games (PROTEGIDOS 🔒)
GET /api/games → Listar videojuegos del usuario
POST /api/games → Crear videojuego
PUT /api/games/:id → Actualizar videojuego
DELETE /api/games/:id → Eliminar videojuego



---

## 🌐 Frontend

El proyecto incluye una interfaz web básica:

### 🧩 Páginas
- `login.html` → Login de usuario
- `dashboard.html` → Visualización de videojuegos

### ⚙️ Funcionalidades
- Login con JWT
- Guardado de token en localStorage
- Consumo de API con fetch
- Render dinámico de videojuegos
- Protección de acceso al dashboard

---

## 🧪 Pruebas de la API

Probado con Postman:

- Registro de usuarios
- Login con JWT
- CRUD de videojuegos
- Validación de rutas protegidas
- Asociación usuario → juegos

---

## ▶️ Instalación y ejecución

```bash
npm install
npm start


🌍 Ejecución del frontend
Abrir directamente:
login.html
dashboard.html


📂 Estructura del proyecto
src/
 ├── config
 ├── controllers
 ├── middlewares
 ├── models
 ├── routes
 ├── app.js
 └── server.js

frontend/
 ├── login.html
 ├── dashboard.html
 ├── style.css
 ├── auth.js
 └── api.js


 ⭐ Mejoras implementadas
 Relación usuario → videojuegos
 Autenticación JWT
 Filtro por usuario logueado
 Paginación en backend
 Ordenamiento por rating
 Interfaz frontend básica conectada a API