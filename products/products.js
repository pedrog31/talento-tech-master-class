const products = [
  {
    name: "Alimento para perros",
    description: "Alimento de alta calidad para perros de todas las razas.",
    imageUrl: "../assets/alimento-perro.avif",
  },
  {
    name: "Juguetes para gatos",
    description: "Variedad de juguetes divertidos para mantener activo a tu gato.",
    imageUrl: "../assets/juguete-gato.jpg",
  },
  {
    name: "Deslanador para perros peludos",
    description: "Elimina el pelo muerto y da mas brillo a su pelaje.",
    imageUrl: "../assets/deslanador.avif",
  },
];

const productContainer = document.querySelector(".product-container");

function loadProducts() {
  products.forEach((product) => {
    const productElement = `
      <div class="product" onclick="showDetails('${product.name}')">
        <h3>${product.name}</h3>
        <img class="product-image" src="${product.imageUrl}" alt="${product.name}" />
        <p>${product.description}</p>
      </div>
    `;
    productContainer.innerHTML += productElement;
  });
}

window.addEventListener("load", loadProducts);

function showDetails(productName) {
  alert("Has seleccionado el producto: " + productName);
}