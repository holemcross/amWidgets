'use strict';

/* Controllers */

var amWidgetsControllers = angular.module('amWidgetsControllers', []);

amWidgetsControllers.controller('DashboardController', ['$scope', 'User','Widget',
  function($scope, User, Widget) {
    $scope.users = User.query();
    $scope.widgets = Widget.query();
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
