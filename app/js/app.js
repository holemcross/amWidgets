'use strict';

// Declare app level module which depends on views, and components
var amWidgetsApp = angular.module('amWidgetsApp', [
  'ngRoute',
  'amWidgetsControllers'
]).
config(['$routeProvider', function($routeProvider) {

// Routing
$routeProvider.
  when('/dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'DashboardController'
  }).
  when('/user/', {
    templateUrl: 'partials/users.html',
    controller: 'UserController'
  }).
  when('/widget/', {
    templateUrl: 'partials/widgets.html',
    controller: 'WidgetController'
  }).
  otherwise({
    redirectTo: '/dashboard'
  });
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
