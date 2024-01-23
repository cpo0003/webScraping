document.addEventListener('DOMContentLoaded', () => {
 
  fetch('/productos')
    .then(response => response.json())
    .then(data => {
      
      const productosContainer = document.getElementById('productos-container');
      data.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.innerHTML = `
          <h3>${producto.titulo}</h3>
          <p>Precio: ${producto.precio}</p>
          <img src="${producto['imagen-src']}" alt="${producto.titulo}">
          <hr>
        `;
        productosContainer.appendChild(productoElement);
      });
    })
    .catch(error => console.error('Error al obtener datos:', error));

});
