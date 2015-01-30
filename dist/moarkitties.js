(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1]);
