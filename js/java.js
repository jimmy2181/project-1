// API responeses for ticketmaster here
var APIkeyTicket = "CWfDrt0hTbUSexgXRIfEm2GAuiAA2NSv";
var queryURLTicketEvents =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" +
  APIkeyTicket;
var queryURLTicketSearch =
  "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=" +
    APIkeyTicket;

// Napster API variables
var APIkeyNapster =
  "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=5&pretty=true";
var queryURLNapster;
"http://api.napster.com/v2.2/search/verbose?apikey=" + APIkeyNapster;

var config = {
  apiKey: "AIzaSyC50MhEjd06OfBG2iZ_CQd0_mQwUCXwCrQ",
  authDomain: "project1-e7dbf.firebaseapp.com",
  databaseURL: "https://project1-e7dbf.firebaseio.com",
  projectId: "project1-e7dbf",
  storageBucket: "project1-e7dbf.appspot.com",
  messagingSenderId: "1006624422576"
};
firebase.initializeApp(config);

var database = firebase.database();

// Storing variables
var name = "";
var email = "";
var zipcode = "";

// Making sure that on click a form isn't submitted

$("#add-user").on("click", function(event) {
  event.preventDefault();
  
  // Capturing values for input fields
  
  name = $("#name-input")
    .val()
    .trim();
  email = $("#email-input")
    .val()
    .trim();
  zipcode = $("#zipcode-input")
    .val()
    .trim();
  
  database.ref().set({
    name,
    email,
    zipcode
  });
});

// Print the initial data to the console

database.ref().on("value", function(snapshot) {
  // console.log(snapshot.val());
  
  // // Print the other values
  
  // console.log(snapshot.val().name);
  // console.log(snapshot.val().email);
  // console.log(snapshot.val().zipcode);
});

// this is the function used to display the data for the cards on the homepage

function displayHomepage() {
  $.ajax({
    url: queryURLTicketEvents,
    method: "GET"
  }).then(function(response) {
    // using jquery to append the page here
    $("#homepageEvents").append(
      $(`<li class="media">
        <img
          src=${response._embedded.events[0].images[0].url}
          class="mr-3"
          alt="img"
        />
        <a href=${response._embedded.events[0].url}>${
        response._embedded.events[0].name
      }</a>
      </li>
      <br>`)
    );

    $("#homepageEvents").append(
      $(`<li class="media">
        <img
          src=${response._embedded.events[1].images[0].url}
          class="mr-3"
          alt="img"
        />
        <a href=${response._embedded.events[1].url}>${
        response._embedded.events[1].name
      }</a>
      </li>
      <br>`)
    );

    $("#homepageEvents").append(
      $(`<li class="media">
        <img
          src=${response._embedded.events[2].images[0].url}
          class="mr-3"
          alt="img"
        />
        <a href=${response._embedded.events[2].url}>${
        response._embedded.events[2].name
      }</a>
      </li>`)
    );
  });
}

displayHomepage();

// This is the API call for the searchable data
function searchResults() {
  // Grabbing postal code input data here and using submit button click as event listener
  $("#submit").on("click", function(event) {
    event.preventDefault();

    var userInput = $("#zipCode")
      .val()
      .trim();

    //searching the API postal code here
    var searchURL = queryURLTicketSearch + "&postalCode=" + userInput;

    $.ajax({
      url: searchURL,
      method: "GET"
    }).then(function(response) {
      // function napsterMusic() {
      //   var musicLink =
      //     queryURLNapster + "?query=" + response._embedded.events[0].name;

      //   // this is the api call for napster
      //   //(that we dont actually use because they dont provide
      //   //the music data we anticipated
      //   //the goal was to have playable music on the page
      //   //but none of the music apis we tried provide that data
      //   //in a way thats accessable for us)

      //   $.ajax({
      //     url: musicLink,
      //     method: "GET"
      //   }).then(function(responseNap) {
      //     console.log('Music link', musicLink);
      //   });
      // }

      // napsterMusic();

      // if else statement that takes into account if the user search an area with no events or if their search is invalid
      if (response.page.totalElements === 0) {
        $("#searchResults").empty();
        $("#searchResults").append($("<p>").text("Sorry no events in this area"))
      } else {
        //appending the events page with a list of search results

        $("#searchResults")
          .empty()
          .append(
            `</br>
        <li class="media">
        <img
          src=${response._embedded.events[0].images[0].url}
          class="mr-3"
          alt="img"
        />
        <a href=${response._embedded.events[0].url}>${
              response._embedded.events[0].name
            }</a>
            </br>
 
          </li>
          <a
          href = https://app.napster.com/ >
          Listen to artist here
        <a>
      </br>


      <li class="media">
      <img
        src=${response._embedded.events[4].images[0].url}
        class="mr-3"
        alt="img"
      />
      <a href=${response._embedded.events[4].url}>${
              response._embedded.events[4].name
            }</a>
            </br>

    </li>
    <a
    href = https://app.napster.com/ >
    Listen to artist here
  <a>

    </br>


        <li class="media">
        <img
          src=${response._embedded.events[1].images[0].url}
          class="mr-3"
          alt="img"
        />
        <a href=${response._embedded.events[1].url}>${
              response._embedded.events[1].name
            }</a>
            </br>

      </li>
      <a
      href = https://app.napster.com/ >
      Listen to artist here
    <a>
        <li class="media">
        <img
          src=${response._embedded.events[2].images[0].url}
          class="mr-3"
          alt="img"
        />
        <a href=${response._embedded.events[2].url}>${
              response._embedded.events[2].name
            }</a>
            </br>

      </li>

      <a
      href = https://app.napster.com/ >
      Listen to artist here
    <a>
      


        <li class="media">
        <img
          src=${response._embedded.events[3].images[0].url}
          class="mr-3"
          alt="img"
        />
        <a href=${response._embedded.events[3].url}>${
              response._embedded.events[3].name
            }</a>
            </br>
            </li>
            <a
            href = https://app.napster.com/ >
            Listen to artist here
            <a>`
          );
      }
    });
  });
}

searchResults();
