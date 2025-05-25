
# Aycron E-Commerce API

Este proyecto es una API RESTful desarrollada con Node.js, Express y MongoDB para gestionar la lógica de una tienda online. Incluye autenticación de usuarios, gestión de productos, y funcionalidades de carrito.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Render (deploy)
- MongoDB Atlas (base de datos)

---

## 🛠️ Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/LucasDMadrigal/aycron_e-commerce_api.git
cd aycron_e-commerce_api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo `.env`

```env
PORT=4000
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/aycron
JWT_SECRET=una_clave_segura
```

### 4. Ejecutar en modo desarrollo

```bash
npm run dev
```

---

## 📡 Endpoints principales

| Método | Ruta                    | Descripción                        |
|--------|-------------------------|------------------------------------|
| POST   | `/api/user/register`    | Registro de usuario                |
| POST   | `/api/user/login`       | Login de usuario                   |
| GET    | `/api/products`         | Obtener todos los productos        |
| GET    | `/api/products/:id`     | Detalle de producto                |
| POST   | `/api/cart`             | Agregar producto al carrito        |
| GET    | `/api/cart`             | Ver carrito del usuario            |

---

## 🌐 Deploy

- API Backend: [https://aycron-e-commerce-api.onrender.com](https://aycron-e-commerce-api.onrender.com)

---

## 👨‍💻 Autor

- Lucas Madrigal
