"use strict";

// pass numberOfDogs
function getDogImage(numberOfDogs = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  // replace existing img with new one
  $(".results").html(`<h2>Look at these pups!</h2>`);

  for (let dog of responseJson.message) {
    $(".results").append(
      `<img src="${dog}" class="results-img" width="200" height="auto">`
    );
  }
  // display results section
  $(".results").removeClass("hidden");
}

function watchUserInput() {
  $("form").submit(e => {
    e.preventDefault();
    let numOfDogs = $('input[name="numOfDogs"]').val();
    // pass number value to getDogImage
    getDogImage(numOfDogs);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit.");
  watchUserInput();
});
