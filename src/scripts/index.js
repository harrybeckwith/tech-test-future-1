import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

// TASK 1
const tableDOM = document.querySelector(".table__body");
// fetch json
const getProductData = async () => {
  const url =
    "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB";
  try {
    const response = await fetch(url);
    const result = await response.json();
    const resultOffers = gatherProduct(result);
    const formattedData = getOfferData(resultOffers);
    const tableItemsHTML = tableItems(formattedData);

    tableItemsHTML.forEach(function(item) {
      tableDOM.insertAdjacentHTML("beforeend", item);
    });
  } catch (error) {
    console.log(error);
  }
};

getProductData();
// go to offers in data
const gatherProduct = data => {
  return data.widget.data.offers;
};
// create object with needed data for table
const getOfferData = arr => {
  return arr.map(item => {
    return {
      name: item.offer.name,
      price: item.offer.currency_symbol + item.offer.price,
      merchantLink: item.merchant.url,
      merchantName: item.merchant.name,
      merchantLogo: item.merchant.logo_url,
      image: item.image
    };
  });
};
// create html for talble items with data
const tableItems = productTableData => {
  return productTableData.map(item => {
    return `
      <div class="table__item">${item.name}</div>
      <div class="table__item">${item.price}</div>
      <div class="table__item"><a href ="${item.merchantLink}"> link</a></div>
      <div class="table__item">${item.merchantName}</div>
      <div class="table__item"><img src="${item.merchantLogo}"></div>
      <div class="table__item"><img src="${item.image}"></div>
    `;
  });
};
// TASK 2

function is_prime(x) {
  if (x < 2 || (x % 2 == 0 && x !== 2)) return false;
  if (x > 2) {
    for (let n = 3; n < x; n += 2) {
      if (x % n == 0) return false;
    }
  }
  return true;
}

for (let i = 1; i <= 500; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else if (is_prime(i)) {
    console.log("PRIME");
  } else console.log(i);
}

// TASK 3

// cylinder
const cyclinderRadius = document.querySelector(".cyclinder__radius");
const cyclinderHeight = document.querySelector(".cyclinder__height");
const cyclinderBtn = document.querySelector(".cyclinder__btn");
const cyclinderResult = document.querySelector(".cyclinder__result");

cyclinderBtn.addEventListener("click", () => {
  const radius = cyclinderRadius.value;
  const height = cyclinderHeight.value;
  const result = Math.PI * radius * radius * height;
  cyclinderResult.innerHTML = `Volume = ${result.toFixed(2)}`;
});
// cuboid
const cuboidWidth = document.querySelector(".cuboid__width");
const cuboidLength = document.querySelector(".cuboid__length");
const cuboidHeight = document.querySelector(".cuboid__height");
const cuboidBtn = document.querySelector(".cuboid__btn");
const cuboidResult = document.querySelector(".cuboid__result");

cuboidBtn.addEventListener("click", () => {
  const width = cuboidWidth.value;
  const length = cuboidLength.value;
  const height = cuboidHeight.value;

  const result = width * length * height;
  cuboidResult.innerHTML = `Volume = ${result}`;
});

// pyramid
const pyramidArea = document.querySelector(".pyramid__area");
const pyramidHeight = document.querySelector(".pyramid__height");
const pyramidBtn = document.querySelector(".pyramid__btn");
const pyramidResult = document.querySelector(".pyramid__result");

pyramidBtn.addEventListener("click", () => {
  const a = pyramidArea.value;
  const h = pyramidHeight.value;

  const result = (1 / 3) * a * a * h;
  pyramidResult.innerHTML = `Volume = ${Math.round(result)}`;
});
