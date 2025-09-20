
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('conte-carrito');
    
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto_carro');
        div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width:150px; height: 100px; border-radius:10px;">
            <li><span>${producto.nombre}</span></li>
            <li><span>Precio:</span> $${producto.precio}</li>
            <button class="btn-eliminar" data-id="${producto.id}" style="width:30px; height:30px; border-radius:100px;"><i class="bi bi-trash3"></i></button>
            `;
            contenedor.appendChild(div);
            
        });
        



    // Funcionalidad para eliminar productos del carrito
    let botonesEliminar = document.querySelectorAll('.btn-eliminar');

        botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const index = carrito.findIndex(producto => producto.id == id);
            if (index !== -1) {
                carrito.splice(index, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito));   
                location.reload(); // Recargar la página para actualizar el carrito
            }
        });
    });

    // suma de productos en el carrito
    function sumaTotal(){
        let total = document.getElementById("total-pagar");
        let suma = 0;
            carrito.forEach(producto =>{
                suma += producto.precio
                total.textContent = parseInt(suma)
            })
        }
        sumaTotal()
        

    //boton para comprar  
    
    const btn_comprar = document.getElementById("comprar"); 
    
// chequeo que el contenedor tenga elementos para realizar la compra
// de esta manera el boton comprar solo funciona cuando hay cosas que comprar

    function check_Contenedor(){
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
        btn_comprar.disabled = true;
        } else {
        btn_comprar.disabled = false;
        }

    }
    check_Contenedor()

    
    btn_comprar.addEventListener("click",()=>{
    
            let total = document.getElementById("total-pagar");
            const respuesta = confirm("¿Estás seguro de que quieres confirmar la compra?");

            if (respuesta) {
                alert("¡Compra confirmada! Gracias por tu pedido.");    
                localStorage.removeItem("carrito");
                contenedor.innerHTML = '<p>El carrito está vacío.</p>';
                total.textContent = "0";    
                 btn_comprar.disabled = true;
            } else{
                alert("La compra fue cancelada.");
            }
          
    })
    
});
