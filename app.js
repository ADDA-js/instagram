//things I had to do first...
// I created three files, 
// - a index.html with a login button
// - a app.js
// - a auth.html, this is the redirect page i will use later
//
// I setup a github pages to host this site, directions here https://pages.github.com/
// I registered a client https://www.instagram.com/developer/clients/manage/
// - use the github pages url as the project uri
// - use the github pages url/auth.html as the redirect uri
// - under security tab, unclick the "Disable explicit OAuth"
// I used the the explicit auth link from the instagram developers site
// with my client id and the redirect site

console.log('working yo');

$(document).ready(function() {

  //this will get the url and split it at the =, the second item is the token
  var token = window.location.href.split('=')[1];

  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/?access_token='+token,
    method: 'GET'
  }).done(render)
});

var render = function(data){
  debugger;
}
