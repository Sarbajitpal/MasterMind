'use strict';
angular.module('myApp').
controller('teamController', ['$scope', '$http','masterDataFactory','$interval','$routeParams','$filter',function($scope,$http,masterDataFactory,$interval,$routeParams,$filter) {
    var i,date1,time1;$scope.fixturesData=[];
   masterDataFactory.getTeamDetails().then(function(data){
       $scope.playersData=data.players;
   	});
   	masterDataFactory.getFixturesDetails().then(function(data){
       $scope.fixturesData = trimDate(data.fixtures);
   	});

   	function trimDate (getData)
    {
       for(i=0;i< getData.length; i++ )
       {
            var finalDate= getData[i].date.replace("Z", "").replace("T"," ");
            getData[i].newDate=new Date(finalDate);
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
            var diffDays = Math.round((getData[i].newDate.getTime() - (new Date()).getTime())/(oneDay));
            getData[i].remDays=diffDays;
            getData[i].countDown='';
            //getData = $filter('orderBy')(getData, "remDays")
       }
       getData = $filter('orderBy')(getData, "remDays");
	       return $filter('limitTo')(getData, "5");
    }
    $interval(function () {
        for(var i=0;i<$scope.fixturesData.length;i++){
            $scope.fixturesData[i].countDown =  getTimeRemaining($scope.fixturesData[i].newDate);
       }
    }, 1000);

    function getTimeRemaining(endtime){
          var t = Date.parse(endtime) - Date.parse(new Date());
          var seconds = Math.floor( (t/1000) % 60 );
          var minutes = Math.floor( (t/1000/60) % 60 );
          var hours = Math.floor( (t/(1000*60*60)) % 24 );
          var days = Math.floor( t/(1000*60*60*24) );
          
        return (days+" Days "+hours+" Hours "+minutes+"Min "+seconds+" Sec Remaining");
          
}
    
}]);


