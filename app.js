"use script";
const destinationsOptions = ["Utah", "Texas", "Minnesota", "Georgia", "Kansas"];
const restaurantsOptions = [
  "Subway",
  "Burger King",
  "Chipotle",
  "McDs",
  "Zaxby's",
];
const transportationModesOptions = ["Car", "Bike", "Bus", "Plane", "Scooter"];
const entertainmentOptions = ["Movie", "Beach", "Mall", "Golfing", "Concert"];

const trip = {
  destination: null,
  restuarant: null,
  transportation: null,
  entertainment: null,
};

function getRandomValue(options) {
  const random = Math.floor(Math.random() * destinationsOptions.length);
  return options[random];
}
