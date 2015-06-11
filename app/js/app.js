'use strict';

// Declare app level module which depends on views, and components
var amWidgetsApp = angular.module('amWidgetsApp', [
  'ngRoute',
  'amWidgetsControllers',
  'amWidgetsServices'
]).
config(['$routeProvider', function($routeProvider) {

// Routing
$routeProvider.
  when('/dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'DashboardController'
  }).
  when('/user', {
    templateUrl: 'partials/users.html',
    controller: 'UserController'
  }).
  when('/user/:userId', {
    templateUrl: 'partials/usersDetails.html',
    controller: 'UserDetailsController'
  }).
  when('/widget', {
    templateUrl: 'partials/widgets.html',
    controller: 'WidgetController'
  }).
  when('/widget/:widgetId', {
    templateUrl: 'partials/widgetsDetails.html',
    controller: 'WidgetDetailsController'
  }).
  otherwise({
    redirectTo: '/dashboard'
  });
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);

amWidgetsApp
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
