'use strict';

/* Controllers */

var amWidgetsControllers = angular.module('amWidgetsControllers', []);

amWidgetsControllers.controller('DashboardController', ['$scope', 'User','Widget',
  function($scope, User, Widget) {
    $scope.users = User.query( function(users){
      $scope.userCount = users.length;
    });
    $scope.widgets = Widget.query( function(widgets){
      $scope.widgetCount = widgets.length;
    });
    //$scope.phones = Phone.query();
    //$scope.orderProp = 'age';
  }]);

amWidgetsControllers.controller('UserController', ['$scope', 'User',
  function($scope, User) {
    $scope.users = User.query();
    //$scope.orderProp = 'age';
  }]);

amWidgetsControllers.controller('WidgetController', ['$scope', 'Widget',
  function($scope,  Widget) {
    $scope.widgets = Widget.query();
    //$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    //  $scope.mainImageUrl = phone.images[0];
    //});

    //$scope.setImage = function(imageUrl) {
    //  $scope.mainImageUrl = imageUrl;
    //}
  }]);
amWidgetsControllers.controller('HeaderController', ['$scope', '$routeParams',
  function($scope, $routeParams) {

    var dirHome = "<a href=\"#\" \">Home</a>";
    var dirDashboard = "<a href=\"#\" \">Dashboard</a>";
    var dirUsers = "<a href=\"#/Users\" \">Users</a>";
    var dirWidgets = "<a href=\"#/Widgets\" \">Widgets</a>";

    $scope.breadcrumbs;
    //$scope.phones = Phone.query();
    //$scope.orderProp = 'age';
  }]);
