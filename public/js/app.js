// ng modules
window.app = angular.module('ngFantasyFootball', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services']); // alternative to using 'ng-app' directive in head/html

// bundling dependencies

// ng controllers
window.angular.module('ngff.controllers', ['ngff.controllers.header','ngff.controllers.index','ngff.controllers.nfl','ngff.controllers.leagues','ngff.controllers.fantasyTeams','ngff.controllers.players']);

// ng services
window.angular.module('ngff.services', ['ngff.services.global','ngff.services.nfl','ngff.services.leagues','ngff.services.fantasyTeams','ngff.services.players']);
