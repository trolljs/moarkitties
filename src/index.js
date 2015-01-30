//stoar the image url
var catz = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat';

function replacePics(cat) {
  // FIND ALL TEH PICTURE ON PAGE
  var images = document.querySelectorAll('img');
  Array.prototype.forEach.call(images, function(el, i){
    el.setAttribute('src', cat);
  });
}

if ( typeof window !== 'undefined' ) {
  var request = new XMLHttpRequest();
  request.open('GET', catz, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // KITTAHNS HOO RAY
      var data = JSON.parse(request.responseText);
      replacePics(data.data.image_url);
    } else {
      // throw abnoxious alert when no kitties found
      alert('SORRY NO KITTAHNS');
    }
  };

  // ANOTHER obnoxious alert
  request.onerror = function() {
    alert('KITTIES DONT LIKE YOU');
  };

  request.send();
}

