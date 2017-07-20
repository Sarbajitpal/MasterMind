'use strict';
angular.module('myApp').
controller('standingController', ['$scope', '$http','$routeParams','$location','masterDataFactory',function($scope,$http,$routeParams,$location,masterDataFactory) {
	masterDataFactory.getStandingDetails(masterDataFactory.getID()).then(function(data){
 			 $scope.leaugeData=data.standing;
  	});

    $scope.redirect = function (Url){
  		var res = Url.split("/");
  		masterDataFactory.setStandingID(res[res.length-1]);  
  		$location.path('/team');
  	};
}]);


