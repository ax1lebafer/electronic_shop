const headphonesContainer = document.querySelector(".section__headphones");
const wirelessHeadphonesContainer = document.querySelector(
  ".section__wireless-headphones"
);

const headphones = [
  {
    img: "./img/Image-1.png",
    title: "Apple BYZ S852I",
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
  },
  {
    img: "./img/Image-2.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "./img/Image-3.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "./img/Image-1.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    img: "./img/Image-2.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "./img/Image-3.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
];

const wirelessHeadphones = [
  {
    img: "./img/Image-4.png",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    img: "./img/Image-5.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    img: "./img/Image-6.png",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
];

// Функция для отрисковки списка наушников
const renderHeadphones = () => {
  const headphonesHtml = headphones
    .map((headphone) => {
      return `
        <article class="product">
          <div class="product__picture">
            <a href="#">
              <img src="${headphone.img}" alt="${headphone.title}" />
            </a>
          </div>
          <div class="product__container product__container-sale">
            <div class="product__info">
              <a class="product__heading" href="">${headphone.title}</a>
              <div class="product__price-box">
                <p class="product__price">${headphone.price} ₽</p>
                ${
                  headphone.oldPrice
                    ? `<p class="product__price-old">${headphone.oldPrice} ₽</p>`
                    : ""
                }
              </div>
            </div>
            <div class="product__info">
              <div class="product__raiting-info">
                <svg
                  width="24.000000"
                  height="22.000000"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M11.62 17.01L4.41 21.36L6.37 13.24L-0.04 7.81L8.38 7.14L11.62 -0.57L14.87 7.14L23.29 7.81L16.87 13.24L18.83 21.36L11.62 17.01Z"
                    fill="#FFCE7F"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <p class="product__raiting">${headphone.rate}</p>
              </div>
              <a href="#" class="product__buy">Купить</a>
            </div>
          </div>
        </article>`;
    })
    .join("");

  headphonesContainer.innerHTML = headphonesHtml;
};

renderHeadphones();

// Функция для отрисовки списка беспроводных наушников
const renderWirelessHeadphones = () => {
  const wirelessHeadphonesHtml = wirelessHeadphones
    .map((wirelessHeadphone) => {
      return `<article class="product">
        <div class="product__picture">
          <a href="#">
            <img src="${wirelessHeadphone.img}" alt="${wirelessHeadphone.title}" />
          </a>
        </div>
        <div class="product__container">
          <div class="product__info">
            <a class="product__heading" href="">${wirelessHeadphone.title}</a>
            <p class="product__price">${wirelessHeadphone.price} ₽</p>
          </div>
          <div class="product__info">
            <div class="product__raiting-info">
              <svg
                width="24.000000"
                height="22.000000"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M11.62 17.01L4.41 21.36L6.37 13.24L-0.04 7.81L8.38 7.14L11.62 -0.57L14.87 7.14L23.29 7.81L16.87 13.24L18.83 21.36L11.62 17.01Z"
                  fill="#FFCE7F"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
              <p class="product__raiting">${wirelessHeadphone.rate}</p>
            </div>
            <a href="#" class="product__buy">Купить</a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  wirelessHeadphonesContainer.innerHTML = wirelessHeadphonesHtml;
};

renderWirelessHeadphones();

// Функция добавления товара в корзину
const buyButtonsProduct = document.querySelectorAll(".product__buy");
const cartCounter = document.querySelector(".cart-counter");

const initAddProductToCart = () => {
  let counter = 1;

  for (const buyButtonProduct of buyButtonsProduct) {
    buyButtonProduct.addEventListener("click", () => {
      counter++;
      cartCounter.textContent = counter;
    });
  }
};

initAddProductToCart();
