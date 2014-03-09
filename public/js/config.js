//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	// NFL Routes
	.when('/', { templateUrl: 'views/index.html' })
	.when('/nflteams', { templateUrl: 'views/nfl/list.html' })
	.when('/nflteams/:nflTeamId', { templateUrl: 'views/nfl/view.html' })
	// .when('/', { templateUrl: 'views/index.html' })
	// League Routes
	.when('/leagues', {templateUrl: 'views/leagues/list.html'})
	.when('/leagues/create', {templateUrl: 'views/leagues/create.html'})
	.when('/leagues/:leagueId/edit', {templateUrl: 'views/leagues/edit.html'})
	.when('/leagues/:leagueId', {templateUrl: 'views/leagues/view.html'})
		// FantasyTeams Routes
	.when('/fantasyteams', {templateUrl: 'views/fantasyteams/list.html'})
	.when('/fantasyteams/create', {templateUrl: 'views/fantasyteams/create.html'})
	.when('/fantasyteams/:fantasyTeamId/edit', {templateUrl: 'views/fantasyteams/edit.html'})
	.when('/fantasyteams/:fantasyTeamId', {templateUrl: 'views/fantasyteams/view.html'})
	// Misc. Routes
	.when('/players', {templateUrl: 'views/players/list.html'})
	// Otherwise route
	.otherwise({redirectTo: '/'});
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);