# Instagram

## Description
This is made to get a access token for the Instagram API. Once you have a token, you can use ajax to get a json object the server.

## Example
Once you have a token, create an app.js with the code below.

```javascript
console.log('working yo');

var token = 'PASTE YOUR TOKEN HERE!';

$(document).ready(function() {

  //this will get the url and split it at the =, the second item is the token
  //var token = window.location.href.split('=')[1];
    $.ajax({
      type: 'GET',
      //the url is the endpoint you want to hit
      //change to get different data from the api
      url: 'https://api.instagram.com/v1/users/self/?access_token='+token,
      dataType: 'jsonp'

    }).done(render)
 });



function render(data) {
  //now you have access to whatever data you ask for from instagram.
  //this example is grabing information about yourself
  //see the different endpoints to know what you can do!
}
```

## Resources
- [Instagram API Endpoints](https://www.instagram.com/developer/endpoints/);
