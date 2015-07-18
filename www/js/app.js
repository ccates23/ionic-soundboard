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
  var clickedAnotherDidntStopFirst;

  for (var i = 1; i < 6; i++) {
    eval("var sound" + i);
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
      if (!clickedAnotherDidntStopFirst) {
        $scope.soundThatsPlaying = null;
        $scope.$apply();
      }
      //console.log($scope.soundThatsPlaying + " is done playing");
      // get stop button to change back!?
    } else {
      soundIsPlaying = true;
    }
  }

  // soundName: str
  // $scope.soundThatsPlaying: str
  // soundIsPlaying: bool

  $scope.play = function(soundName) {
    if (soundIsPlaying && soundName === $scope.soundThatsPlaying) {
      eval($scope.soundThatsPlaying + ".stop()");
      $scope.soundThatsPlaying = null;
      return;
    } else if (soundIsPlaying) {
      eval($scope.soundThatsPlaying + ".stop()");
      $scope.soundThatsPlaying = soundName;
      clickedAnotherDidntStopFirst = true;
      setTimeout(function(){clickedAnotherDidntStopFirst = false}, 1);
      eval(soundName + ".play()");
    } else {
      $scope.soundThatsPlaying = soundName;
      eval(soundName + ".play()");
    }
  }

})
