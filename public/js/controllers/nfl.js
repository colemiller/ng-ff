window.angular.module('ngff.controllers.nfl', [])
  .controller('NFLController', ['$scope','$routeParams','Global','NFL',
    function($scope, $routeParams, Global, NFL) {
    	$scope.global = Global; // need Global in each controller for authentication

    	$scope.nflteams = NFL.teams; // refrences NFL service
    	$scope.nflteam = NFL.teams[$routeParams['nflTeamId']];
    }]);