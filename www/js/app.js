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
  var doforlove;

  function onDeviceReady() {
    //console.log("prepping sounds");
    sound1 = new Media("sounds/sound-1.mp3");
    doforlove = new Media("sounds/doforlove.mp3");
  }

  $scope.play = function(soundName) {
    //console.log('playing sound');
    eval(soundName + ".play()");
    console.log(soundName);
  }
})
