"use script";
const destinationsOptions = ["Utah", "Texas", "Minnesota", "Georgia", "Kansas"];
const restaurantsOptions = ["Subway", "Burger King", "Chipotle", "McDs", "Zax"];
const transportationOptions = ["Car", "Bike", "Bus", "Plane", "Scooter"];
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

function makeDestinationSelections() {
  const randomDestinationOptions = getRandomValue(destinationsOptions);
  const userChoice = prompt(
    `Do you want to have a Day Trip to ${randomDestinationOptions}?`
  );
  if (userChoice.toLowerCase() === "yes") {
    return randomDestinationOptions;
  } else {
    return makeDestinationSelections(destinationsOptions);
  }
}

function makeRestaurantSelections() {
  const randomRestaurantOptions = getRandomValue(restaurantsOptions);
  const userChoice = prompt(`Do you want to go to ${randomRestaurantOptions}?`);
  if (userChoice.toLowerCase() === "yes") {
    return randomRestaurantOptions;
  } else {
    return makeRestaurantSelections(restaurantsOptions);
  }
}

function makeTransportationSelections() {
  const randomTransportationOptions = getRandomValue(transportationOptions);
  const userChoice = prompt(
    `Do you want to go to ${randomTransportationOptions}?`
  );
  if (userChoice.toLowerCase() === "yes") {
    return randomTransportationOptions;
  } else {
    return makeTransportationSelections(transportationOptions);
  }
}

function makeEntertainmentSelections() {
  const randomEntertainmentOptions = getRandomValue(entertainmentOptions);
  const userChoice = prompt(
    `Do you want to go to ${randomEntertainmentOptions}?`
  );
  if (userChoice.toLowerCase() === "yes") {
    return randomEntertainmentOptions;
  } else {
    return makeEntertainmentSelections(entertainmentOptions);
  }
}

function dayTrip() {
  trip.destination = makeDestinationSelections(destinationsOptions);
  trip.restuarant = makeRestaurantSelections(restaurantsOptions);
  trip.transportation = makeTransportationSelections(transportationOptions);
  trip.entertainment = makeEntertainmentSelections(entertainmentOptions);
  console.log(trip);
}

dayTrip();
