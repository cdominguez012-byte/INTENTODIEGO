
// Obtener elementos
const card = document.getElementById('productoCard');
const btnSeleccionar = document.getElementById('btnSeleccionar');
const btnRetirar = document.getElementById('btnRetirar');
const estado = document.getElementById('estadoSeleccion');
const descripcion = document.getElementById('descripcionProducto');

// Evento: Seleccionar producto
btnSeleccionar.addEventListener('click', () => {
  card.classList.add('border', 'border-success', 'shadow');
  estado.textContent = 'Producto seleccionado ✅';
});

// Evento: Retirar selección
btnRetirar.addEventListener('click', () => {
  card.classList.remove('border', 'border-success', 'shadow');
  estado.textContent = '';
  });