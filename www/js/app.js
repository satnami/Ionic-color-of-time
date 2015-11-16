// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller("starterCtrl",starterCtrl);

starterCtrl.$inject = ["$scope", "$timeout"];

function starterCtrl($scope, $timeout){
	$scope.time = 0;
	$scope.hex = 0;
	
	$scope.timeColor = function(){		
		var d = new Date();
		var hours = d.getHours();
		var mins = d.getMinutes();
		var secs = d.getSeconds();
		
		if (hours < 10){hours = "0" + hours};
		if (mins < 10){mins = "0" + mins};
		if (secs < 10){secs = "0" + secs};
		
		hours.toString();
		mins.toString();
		secs.toString();
		
		var hex = "#" + hours + mins + secs;
		
		$scope.time = hours +" : "+ mins +" : "+ secs;
		$scope.hex = hex;
		$scope.colorStyle = {"background-color": $scope.hex};
		$timeout($scope.timeColor, 1000);
	}
	$scope.timeColor();
}
