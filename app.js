"use script";
const destinationsOptions = ["Utah", "Texas", "Minnesota", "Georgia", "Kansas"];
const restaurantsOptions = [
  "Subway",
  "Burger King",
  "Chipotle",
  "McDs",
  "Zaxby's",
];
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

function dayTrip() {
  trip.destination = makeDestinationSelections(destinationsOptions);
  //   trip.restuarant = makeRestaurantSelections(restaurantsOptions);
  //   trip.transportation = makeTransportationSelection(transportationOptions);
  // trip.entertainment = makeEntertainmentSelections(entertainmentOptions);
  console.log(trip);
}

dayTrip();
