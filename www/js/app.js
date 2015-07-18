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

  var soundIsPlaying = false;
  var playingSound;

  for (var i = 1; i < 6; i++) {
    eval("var sound" + i);
    // eval("var sound" + i + "_p = false");
  }

  function onDeviceReady() {
    sound1 = new Media("sounds/sound-1.mp3", null, null, mediaStatusCallback);
    sound2 = new Media("sounds/drum.mp3", null, null, mediaStatusCallback);
    sound3 = new Media("sounds/gthang.mp3", null, null, mediaStatusCallback);
    sound4 = new Media("sounds/ps1.mp3", null, null, mediaStatusCallback);
    sound5 = new Media("sounds/leviosa.mp3", null, null, mediaStatusCallback);
  }

  // this behaves like a loop and constantly updates (i dunno why?)
  var mediaStatusCallback = function(status) {
    if (status === 4) {
      soundIsPlaying = false;
      console.log($scope.playingSound + " is done playing");
      // get stop button to change back!?
    } else {
      soundIsPlaying = true;
    }
  }

  // soundName: str
  // $scope.playingSound: str
  // soundIsPlaying: bool
  $scope.play = function(soundName) {
    if (soundIsPlaying) {
      eval($scope.playingSound + ".stop()");
      if (soundName === $scope.playingSound) {
        $scope.playingSound = "";
        return;
      }
    }
    $scope.playingSound = soundName;
    eval(soundName + ".play()");
  }
})
