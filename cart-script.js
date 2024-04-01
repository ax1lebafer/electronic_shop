const cartContentBox = document.querySelector(".cart__item");
const cartBuyContent = document.querySelector('.cart__buy');

const productsToCart = [
  {
    img: "./img/Image-1.png",
    title: "Apple BYZ S852I",
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
  },
];

const renderCartBuyElement = () => {
    const buyForm = productsToCart.map((product) => {
        return `<div class="cart__pay">
        <p class="cart__total">ИТОГО</p>
        <p class="cart__total cart__fullcost">₽ ${product.price}</p>
      </div>
      <button class="cart__button">Перейти к оформлению</button>`
    })
    .join('');

    cartBuyContent.innerHTML = buyForm;
}

const renderProductsToCart = () => {
  const productsHtml = productsToCart.map((product) => {
    return `<article class="cart__product">
    <div class="cart__section">
      <div class="cart__box">
        <img
          class="cart__image"
          src="${product.img}"
          alt="${product.title}"
        />
        <div class="cart__info">
          <a class="cart__name" href="#">${product.title}</a>
          <p class="cart__price">${product.price} ₽</p>
        </div>
      </div>
      <button class="cart__delete-button">
        <svg
          width="20.000000"
          height="17.000000"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M14.88 3.39L19.86 3.39L19.86 5.1L17.87 5.1L17.87 16.15C17.87 16.37 17.76 16.59 17.58 16.75C17.39 16.91 17.14 17 16.87 17L2.92 17C2.66 17 2.41 16.91 2.22 16.75C2.03 16.59 1.93 16.37 1.93 16.15L1.93 5.1L-0.07 5.1L-0.07 3.39L4.92 3.39L4.92 0.85C4.92 0.62 5.02 0.4 5.21 0.24C5.39 0.08 5.65 0 5.91 0L13.88 0C14.15 0 14.4 0.08 14.59 0.24C14.77 0.4 14.88 0.62 14.88 0.85L14.88 3.39ZM15.88 5.1L3.92 5.1L3.92 15.3L15.88 15.3L15.88 5.1ZM11.31 10.2L13.07 11.7L11.66 12.9L9.9 11.4L8.14 12.9L6.73 11.7L8.49 10.2L6.73 8.69L8.14 7.49L9.9 8.99L11.66 7.49L13.07 8.69L11.31 10.2ZM6.91 1.7L6.91 3.39L12.89 3.39L12.89 1.7L6.91 1.7Z"
            fill="#DF6464"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </svg>
      </button>
    </div>
    <div class="cart__footer">
      <div class="cart__bottom">
        <button class="cart__knob cart__reduce">
          <svg
            width="30.000000"
            height="30.000000"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <circle
              id="Ellipse 4"
              cx="15.000000"
              cy="15.000000"
              r="15.000000"
              fill="#FFCE7F"
              fill-opacity="1.000000"
            />
            <path
              id="Vector"
              d="M8 14L22 14L22 16L8 16L8 14Z"
              fill="#FFFFFF"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <p class="cart__counter">1</p>
        <!-- <input class="cart__counter" type="number" name="count" value="1" min="1"> -->
        <button class="cart__knob cart__add">
          <svg
            width="30.000000"
            height="30.000000"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <circle
              id="Ellipse 5"
              cx="14.205566"
              cy="15.000000"
              r="15.000000"
              fill="#FFCE7F"
              fill-opacity="1.000000"
            />
            <path
              id="Vector"
              d="M13.2 14L13.2 8L15.2 8L15.2 14L21.2 14L21.2 16L15.2 16L15.2 22L13.2 22L13.2 16L7.2 16L7.2 14L13.2 14Z"
              fill="#FFFFFF"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
      <p class="cart__total-price">${product.price} ₽</p>
    </div>
  </article>`
  })
  .join('');

  cartContentBox.innerHTML = productsHtml;

  renderCartBuyElement();
};

renderProductsToCart();

const addProductCounter = document.querySelector(".cart__add");
const reduceProductCounter = document.querySelector(".cart__reduce");
const productCounter = document.querySelector(".cart__counter");

// Функция увеличения счетчика товара
const initAddProductCounter = () => {
  addProductCounter.addEventListener("click", () => {
    productCounter.textContent++;
  });
};

// Функия уменьшения счетчика товара
const initReduceProductCounter = () => {
  reduceProductCounter.addEventListener("click", () => {
    if (productCounter.textContent <= 0) {
      productCounter.textContent = 0;
    } else {
      productCounter.textContent--;
    }
  });
};

initAddProductCounter();
initReduceProductCounter();
