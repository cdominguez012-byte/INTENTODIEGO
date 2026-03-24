
// Arreglo de productos ficticios
let productos = [
  {
    id: 1,
    nombre: "Cámara Fotográfica",
    precio: "$299.99",
    descripcion: "Alta resolución, ideal para viajes.",
    imagen: "img/camara.jpg"
  },
  {
    id: 2,
    nombre: "Audífonos Inalámbricos",
    precio: "$99.99",
    descripcion: "Sonido envolvente y cancelación de ruido.",
    imagen: "img/audifonos.webp"
  },
  {
    id: 3,
    nombre: "Smartwatch Deportivo",
    precio: "$149.99",
    descripcion: "Monitorea tu salud y actividad física.",
    imagen: "img/smartwatch.webp"
  }
];

// Obtener contenedor principal
const galeria = document.getElementById('galeriaProductos');

// ----------------------------------------------------
// Función para mostrar los productos en pantalla
// ----------------------------------------------------
function mostrarProductos() {
  galeria.innerHTML = ""; // Limpia antes de renderizar

  productos.forEach(producto => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    col.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p><strong>${producto.precio}</strong></p>
          <p class="descripcion">${producto.descripcion}</p>
        </div>
      </div>
    `;

    galeria.appendChild(col);
  });
}

// Mostrar los productos al cargar
mostrarProductos();


// ----------------------------------------------------
// FUNCIÓN PARA AGREGAR UN PRODUCTO NUEVO DESDE LA PÁGINA
// ----------------------------------------------------
function agregarProducto(nombre, precio, descripcion, imagen) {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
    descripcion,
    imagen
  };

  productos.push(nuevoProducto);
  mostrarProductos(); // Refresca la galería
}


// ----------------------------------------------------
// (Opcional) Crear un pequeño formulario automáticamente
// para que el usuario agregue productos desde la página
// ----------------------------------------------------
crearFormularioAgregar();

function crearFormularioAgregar() {
  const contenedor = document.createElement("div");
  contenedor.className = "container mt-4";

  contenedor.innerHTML = `
    <h4>Agregar nuevo producto</h4>
    <div class="row g-3">
      <div class="col-md-3">
        <input id="nombreProd" type="text" class="form-control" placeholder="Nombre">
      </div>
      <div class="col-md-2">
        <input id="precioProd" type="text" class="form-control" placeholder="Precio">
      </div>
      <div class="col-md-3">
        <input id="descProd" type="text" class="form-control" placeholder="Descripción">
      </div>
      <div class="col-md-3">
        <input id="imgProd" type="text" class="form-control" placeholder="Imagen (archivo)">
      </div>
      <div class="col-md-1">
        <button id="btnAgregar" class="btn btn-success w-100">+</button>
      </div>
    </div>
    <hr>
  `;

  // Insertarlo arriba de la galería
  document.body.insertBefore(contenedor, document.querySelector(".container"));

  // Evento del botón
  document.getElementById("btnAgregar").addEventListener("click", () => {
    const n = document.getElementById("nombreProd").value;
    const p = document.getElementById("precioProd").value;
    const d = document.getElementById("descProd").value;
    const i = document.getElementById("imgProd").value;

    if (!n || !p || !d || !i) {
      alert("Completa todos los campos.");
      return;
    }

    agregarProducto(n, p, d, i);

    // Limpiar campos
    document.getElementById("nombreProd").value = "";
    document.getElementById("precioProd").value = "";
    document.getElementById("descProd").value = "";
    document.getElementById("imgProd").value = "";
  });
}