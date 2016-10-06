// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var keyword = $('#search-keyword').val();
    console.log(keyword);
    if ($('#search-type').val()=='artist'){
      searchByArtist();
    } else {
      searchByTrack();
    }
    //var context = $(this).text();
    //    loadResults(context);

  });

function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  alert('this works')
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
  alert('this works too')
}

});
