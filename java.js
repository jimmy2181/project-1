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

var APIkey = "CWfDrt0hTbUSexgXRIfEm2GAuiAA2NSv";
var queryURLTicketEvents =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + APIkey;
var APIkeyNapster =
  "http://api.napster.com/v2.2/artists/art.978?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=5&pretty=true";

$.ajax({
  url: queryURLTicketEvents,
  method: "GET"
}).then(function(response) {
  console.log(queryURLTicketEvents);
  console.log(response);
});

console.log(APIkeyNapster);

// Here we grab the text from the input box
var city = $("#form-control mr-sm-2").val();

$.ajax({
  url: queryURLTicketEvents,
  method: "GET"
}).then(function(response) {
  console.log(response);
  // Looping over first 3 results item from events
  for (var i = 0; i < 3; i++) {
    $(".list-unstyled").append(
      $("<li>").text(response._embedded.events[i].name)
    );
  }
});

// Here we grab the text from the input box
var city = $("#form-control mr-sm-2").val();
