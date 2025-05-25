
# Guía Técnica de Presentación – Aycron E-Commerce

Esta guía está pensada para presentar el proyecto durante una entrevista o demo técnica.

---

## ✅ Objetivo de la demo

Mostrar el flujo básico de un usuario en una tienda online:
1. Registro y login
2. Navegación por el catálogo
3. Agregar productos al carrito
4. Visualizar el carrito
5. Probar protección de rutas y roles

---

## 🔗 Accesos rápidos

- Backend: [https://aycron-e-commerce-api.onrender.com](https://aycron-e-commerce-api.onrender.com)
- Repositorio: [GitHub - aycron_e-commerce_api](https://github.com/LucasDMadrigal/aycron_e-commerce_api)

---

## 🧪 Casos de prueba sugeridos

1. **Registro de usuario**
   - POST `/api/user/register` con nuevo email

2. **Login**
   - POST `/api/user/login`
   - Guardar el token JWT

3. **Catálogo**
   - GET `/api/products`
   - GET `/api/products?name=camiseta`

4. **Carrito**
   - POST `/api/cart` con token en el header
   - GET `/api/cart` para ver el carrito

5. **Dashboard admin**
   - Acceder solo si el usuario tiene rol `admin`

---

## ⚙️ Detalles técnicos a mencionar

- Arquitectura MVC simple
- Uso de `dotenv` para variables de entorno
- Conexión segura con MongoDB Atlas
- Implementación de middleware de autenticación y roles
- Preparación del proyecto para futura extensión (dashboard, pagos, pedidos)

---

## 🧩 Consideraciones

- Este es un MVP funcional
- Checkout con Stripe está fuera del alcance actual
- Seguridad básica aplicada (JWT y roles)
