'use strict';

/* Consts */

var widgetsURI = "http://spa.tglrw.com:4000/widgets";
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

// USERS
amWidgetsControllers.controller('UserController', ['$scope', 'User', '$location',
  function($scope, User, $location) {
    $scope.users = User.query();

    $scope.showUser = function(user){
      $location.path('/user/' + user.id);
    };
  }]);

amWidgetsControllers.controller('UserDetailsController', ['$scope', 'User', '$routeParams',
  function($scope, User, $routeParams) {
    $scope.user = User.get({ userId: $routeParams.userId });

  }]);

// WIDGETS
amWidgetsControllers.controller('WidgetController', ['$scope', 'Widget', '$location', '$http',
  function($scope, Widget, $location, $http) {
    $scope.widgets = Widget.query();

    $scope.showEditWidget = function(widget){
      $location.path('/widget/' + widget.id);
    }
    $scope.createWidget = function(inData){

      //var newWidget = new Widget();
      //newWidget.name = data.name;
      //newWidget.price = data.price;
      //newWidget.color = data.color;
      //newWidget.melts = data.melts;
      //newWidget.inventory = data.inventory;
      //newWidget.$create();

      //Widget.create( { name: newWidget.name, price: newWidget.price,
      // color: newWidget.color, melts: newWidget.melts, inventory: newWidget.inventory} );

      var req = {
         method: 'POST',
         url: widgetsURI,
         headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Headers': 'Content-Type',
           'Access-Control-Allow-Origin': '*'
         },
         data: JSON.stringify(inData)
        }
      //$http.post(widgetsURI, data); //.success(successCallback);
      $http(req);
      //$.ajax({
      //  type: "POST",
      //  url: widgetsURI,
      //  data: inData,
      //  //success: success,
      //  dataType: 'json'
      //});
      //$.post(widgetsURI, JSON.stringify(inData), null, 'json' )
    }
  }]);
amWidgetsControllers.controller('WidgetDetailsController', ['$scope', 'Widget','$routeParams',
  function($scope, Widget, $routeParams) {

    $scope.pickedWidget = Widget.get({ widgetId: $routeParams.widgetId });
    console.log($routeParams.widgetId);

    $scope.updateWidget = function(data){
      var req = {
         method: 'PUT',
         url: widgetsURI + '/'+ data.id,
         headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Headers': 'Content-Type',
           'Access-Control-Allow-Origin': '*'
         },
         data: JSON.stringify(inData)
        }
      //$http.post(widgetsURI, data); //.success(successCallback);
      $http(req);
    };
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
