// 1. As a user, I want to be able to listen music online.(spotify api)
// 2. As a user, I want to find events in the area.(streaming ticketvmastervapi).
// 3. As a user, able to save playlists.
// 4. As a user able to to save my profile (via firebase).
// 5. As a user hold data from last searches (firebase).'
// 6. var APIkey = "3gWNNMOFcqaL6aCBOH6zS6VDBmUwk8ZL";

// window.onload = function() {
//     $("#start").on("click", startSong );
//     $("#stop").on("click", stopSong);
//     $("#fastforward").on("click", fastForward)
//     $("#rewind").on("click", rewind);
// }

// earshot logo on video player
// $("#display").text("<>");

// API responeses for ticketmaster here
var APIkeyTicket = "CWfDrt0hTbUSexgXRIfEm2GAuiAA2NSv";
var queryURLTicketEvents =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" +
  APIkeyTicket;
var queryURLTicketSearch =
  "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=" +
  APIkeyTicket;
// Napster API variables
var APIkeyNapster =
  "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=5&pretty=true";
var queryURLNapster =
  "http://api.napster.com/v2.2/artists/art.978?apikey=" + APIkeyNapster;

// this is the function used to display the data for the cards on the homepage
function displayHomepage() {
  $.ajax({
    url: queryURLTicketEvents,
    method: "GET"
  }).then(function(response) {


    console.log(queryURLTicketEvents);
    console.log(response._embedded.events);


    $(".list-unstyled").append(
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
    
    $(".list-unstyled").append(
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

    $(".list-unstyled").append(
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
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#zipCode")
      .val()
      .trim();

    var searchResults = queryURLTicketSearch + "&postalCode=" + userInput;
    $.ajax({
      url: searchResults,
      method: "GET"
    }).then(function(response) {
      console.log(response._embedded);

      $("").append(
        `<li class="media">
        <img
          src=${}
          class="mr-3"
          alt="img"
        />
        <a href=${response.events[0].url}>${response.events[0].name
      }</a>
      </li>`
      )
    });
  });
}

searchResults();
// This is the data for the corresponing music that matches the search results
function napsterMusic() {
  $.ajax({
    url: queryURLNapster,
    method: "GET"
  }).then(function(response) {});
}

napsterMusic();


