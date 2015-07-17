// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('Main', function($scope){
  document.addEventListener("deviceready", onDeviceReady, false);

  var sound1;
  var sound2;
  var sound3;
  var sound4;
  var sound5;

  function onDeviceReady() {
    sound1 = new Media("sounds/sound-1.mp3");
    sound2 = new Media("sounds/drum.mp3");
    sound3 = new Media("sounds/gthang.mp3");
    sound4 = new Media("sounds/ps1.mp3");
    sound5 = new Media("sounds/leviosa.mp3");


  }

  $scope.play = function(soundName) {
    eval(soundName + ".play()");
  }
})
