'use strict';
angular.module('myApp').
controller('competitionController', ['$scope', '$http','$location','masterDataFactory',function($scope,$http,$location,masterDataFactory) {
	masterDataFactory.getCompetitionDetails().then(function(data){
       $scope.competitionData=data;
   	});
    $scope.redirect = function (id){
    	masterDataFactory.setID(id);
    	$location.path('/standing');
    };
}]);


