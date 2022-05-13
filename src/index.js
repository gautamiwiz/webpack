import "./styles/index.scss";

const car = {
  brand: "Mercedez",
  cost: "1Cr",
};

const car2 = {
  ...car,
  Doors: 4,
};

console.log(car);
console.log(car2);
