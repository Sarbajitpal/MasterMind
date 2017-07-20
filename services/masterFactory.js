angular.module('myApp')
.factory('masterDataFactory',function($http, $location , $log) {
    var getCompetitionDetails = function() {
        return $http({
        url:"http://api.football-data.org/v1/competitions/?season=2015",
        method:'GET',
        headers: {
          'X-Auth-Token': '7534d7cc38274f1e806c678f07f109aa'
        } 
        }).then(function(response) {
              return response.data;
        },function(response){
            $log.error("Error");
            $location.path('/');
            alert("No Data Found");
        });
    };
    var getStandingDetails = function(id) {
        return $http({
        method : 'GET',
        url : "http://api.football-data.org/v1/competitions/"+id+"/leagueTable",
        headers: {
          'X-Auth-Token': '7534d7cc38274f1e806c678f07f109aa'
        }
        }).then(function(response) {
              return response.data;
        },function(response){
            $log.error("Error");
            $location.path('/');
            alert("No Data Found");
        });
    };
    var getTeamDetails = function() {
        return $http({
        url:'http://api.football-data.org/v1/teams/'+standingID+'/players',
        method: 'GET',
        headers: {
          'X-Auth-Token': '7534d7cc38274f1e806c678f07f109aa'
        }
        }).then(function(response) {
              return response.data;
        },function(response){
            $log.error("Error");
            $location.path('/');
            alert("No Data Found");
        });
    };
    var getFixturesDetails = function() {
        return $http({
            method : 'get',
            url:"http://api.football-data.org/v1/teams/"+standingID+"/fixtures",
            headers: {
            'X-Auth-Token': '7534d7cc38274f1e806c678f07f109aa'
            }
         }).then(function(response) {
              return response.data;
        },function(response){
            $log.error("Error------"+response.data.error);
            $location.path('/');
            alert("No Data Found");
        });
    };
    var id = null,standingID;
    var getID = function(){
       return id;
    } 
    var setID = function(value){
      id = value;
    }
    var setStandingID = function(value){
      standingID = value;
    }
    return {
        getCompetitionDetails: getCompetitionDetails,
        getStandingDetails : getStandingDetails,
        getTeamDetails : getTeamDetails,
        getFixturesDetails : getFixturesDetails,
        setID : setID,
        getID: getID,
        setStandingID : setStandingID    
    };
});

