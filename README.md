# 🛒 Tecno Mundi - E-commerce de Tecnología

Este proyecto es un e-commerce educativo que permite a los usuarios visualizar productos tecnológicos, filtrarlos por categoría, y agregar productos a un carrito de compras simulando la compra de los mismos.
Está desarrollado con HTML, CSS y JavaScript puro, y hace uso de conceptos fundamentales como "AJAX, Fetch API, promesas, objetos y eventos".

 🌟 Características principales

- Interfaz visual moderna con estilos personalizados y uso de Bootstrap Icons.
- Filtro por categorías: Heladeras, Celulares, Lavarropas, Computadoras, Televisores.
- Carga de productos dinámica desde un archivo `.json` usando Fetch + Promesas (AJAX).

- Carrito de compras con:
  - Conteo de productos.
  - Suma total.
  - Botón para confirmar compra.
  - Persistencia en `localStorage`.



🛠️ Tecnologías usadas

- HTML5
- CSS (con Flexbox, Gradientes y Estilos adaptados)
- JavaScript 
- Fetch async , await para consumo de datos (AJAX)
- localStorage para persistencia de carrito
- Bootstrap Icons


 📁 Estructura del Proyecto
 /imagenes/
 
├── img-html/
├── img-json/
│ ├──img-cel/
│ ├──img-computadoras/
│ ├──img-hela/
│ ├──img-lavar/
│ ├──img-televisor/
index.html
carrito.html
style.css
index.js
carrito.js
productos.json
README.md

🧠 Conceptos aplicados:
1. AJAX con Fetch API
2. 
Se utiliza `fetch()` para obtener productos desde `productos.json` de forma asincrónica:
``js
const resp = await fetch(productos_json);
const data = await resp.json();
Esto permite cargar los productos sin recargar la página (AJAX moderno).

3. Objetos

Los productos se manejan como objetos JS con propiedades como nombre, marca, precio, etc.
Ejemplo:
{
  id: "tv01",
  nombre: "Smart TV 43''",
  marca: "Samsung",
  precio: 150000,
  descripcion: "Resolución 4K",
  imagen: "./imagenes/img-html/tv.png"
}

3. Promesas
El fetch devuelve una promesa que se maneja con async/await:

try {
  const respuesta = await fetch('productos.json');
  const data = await respuesta.json();
} catch (error) {
  console.error("Error al cargar los productos", error);
}

4. Eventos
Se capturan eventos como clics para:
- Filtrar productos por categoría.
- Agregar productos al carrito.
- Eliminar productos.
- Confirmar compra.

Ejemplo:
btn_lavarropa.addEventListener('click', () => getProductos('lavarropas'));

5. Manipulación del DOM
Se agregan dinámicamente productos al HTML con createElement e innerHTML, estilos css, etc.

🛒 Flujo del usuario :

En la página principal, el usuario puede filtrar productos por categoría.
Los productos se cargan dinámicamente desde el archivo .json.
El usuario puede hacer clic en Agregar al carrito.
El carrito se guarda en localStorage.
En carrito.html, el usuario puede:
Ver productos añadidos.
Ver el total a pagar.
Eliminar productos.
Confirmar la compra.

✅ Instalación y uso :
Clona o descarga el repositorio.
Abre index.html en tu navegador.
Para revisar el carrito, navega a carrito.html.

🧑‍💻 Autor :
Proyecto desarrollado por Rodrigo Grigera.
