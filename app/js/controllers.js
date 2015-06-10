'use strict';

/* Controllers */

var amWidgetsControllers = angular.module('amWidgetsControllers', []);

amWidgetsControllers.controller('DashboardController', ['$scope', 'Phone',
  function($scope, Phone) {
    //$scope.phones = Phone.query();
    //$scope.orderProp = 'age';
  }]);

amWidgetsControllers.controller('UserController', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

amWidgetsControllers.controller('WidgetController', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
