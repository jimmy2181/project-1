// 1. As a user, I want to be able to listen music online.(spotify api)
// 2. As a user, I want to find events in the area.(streaming ticketvmastervapi).
// 3. As a user, able to save playlists.
// 4. As a user able to to save my profile (via firebase).
// 5. As a user hold data from last searches (firebase).'
// 6. 

// window.onload = function() {
//     $("#start").on("click", startSong );
//     $("#stop").on("click", stopSong);
//     $("#fastforward").on("click", fastForward)
//     $("#rewind").on("click", rewind);
// }

// earshot logo on video player
// $("#display").text("<>");
$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey={3gWNNMOFcqaL6aCBOH6zS6VDBmUwk8ZL}",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
      }  // This time, we do not end up here!
             });