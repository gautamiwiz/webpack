import "./styles/index.scss";

import ImageLogo from "./images/iwiz-logo.png";

const car = {
  brand: "Mercedez",
  cost: "1Cr",
};

const car2 = {
  ...car,
  Doors: 4,
};

let footer = document.createElement("footer");
let imageElement = new Image();
imageElement.src = ImageLogo;
footer.append(imageElement);

document.body.append(footer);

console.log(car);
console.log(car2);
