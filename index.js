let productos_json = './productos.json';
let carrito_de_compras = [];


const btn_lavarropa = document.getElementById('lavarropa');
const btn_heladera = document.getElementById('heladera');
const btn_televisor = document.getElementById('televisor');
const btn_celular = document.getElementById('celular');
const btn_computadora = document.getElementById('computadora');



const getProductos = async (categoria) => {
    try {
        const resp = await fetch(productos_json);

       if (!resp.ok) {
        throw new Error("Error en la solicitud: " + resp.status);
       }  
        const data = await resp.json();

        let productos = data[categoria];
        dibujarProductos(productos);
    } catch (error) {
        console.log("Error al cargar el archivo", error);
    }
    
}

// Escucha de eventos

btn_lavarropa.addEventListener('click', () => getProductos('lavarropas'));
btn_heladera.addEventListener('click', () => getProductos('heladeras'));
btn_televisor.addEventListener('click', () => getProductos('televisores'));
btn_celular.addEventListener('click', () => getProductos('celulares'));
btn_computadora.addEventListener('click', () => getProductos('computadoras'));


const dibujarProductos = (productos) => {
    
    let contenedor = document.querySelector('.conte-productos');
    contenedor.innerHTML = ''; 

    productos.forEach(producto => {
        let div = document.createElement('div');
        div.classList.add('producto'); 
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width:200px; height:150px; border-radius:10px;">
            <h3>${producto.nombre}</h3>
            <ul>
            <li><span>Marca:</span> ${producto.marca}</li>
            <li><span>Precio:</span> $${producto.precio}</li>
            </ul>
            <p>${producto.descripcion}</p>
            <button id=${producto.id} class="btn-comprar"><i class="bi bi-cart4" style="margin-right: 5px;"></i>Agregar al carrito</button>
        `;
        contenedor.appendChild(div)

        // Agrego funcionalidad a los botones dibujados en las cards"
        // para que al hacer click en "Agregar al carrito" se incremente el contador
        // y se muestre una alerta con el nombre del producto agregado.

        const btn = div.querySelector('.btn-comprar');
        btn.addEventListener('click', () => {
            let spanContador = document.getElementById('span-contador-carrito');
            spanContador.style.color = 'red';
            spanContador.style.fontWeight = 'bold';
            spanContador.textContent = parseInt(spanContador.textContent) + 1;
            
            // pusheo el producto al array carrito_de_compras y lo guardo en localStorage
            carrito_de_compras.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito_de_compras));
            alert(`Has agregado ${producto.nombre} al carrito.`);
        
        })
    });
}

// Cambio de color en botones de filtro.
// Selecciono todos los botones con la clase 'btn-filtro', los recorro y les agrego un evento click
// que cambia el color de fondo del botón clickeado y resetea el color de los demás botones.

const botonesFiltro = document.querySelectorAll('.btn-buscador');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesFiltro.forEach(b => b.style.backgroundColor = 'aliceblue');
        boton.style.backgroundColor = '#2980b9';
    });
});



