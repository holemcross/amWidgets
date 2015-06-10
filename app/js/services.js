'use strict';

/* Services */

var amWidgetsServices = angular.module('amWidgetsServices',['ngResource']);

amWidgetsServices.factory('User', ['$resource',
	function($resource){
		return $resource('http://spa.tglrw.com:4000/users', {}, {
			query: {method:'GET', params:{userId:'users'}, isArray:true}
		});
	}]);

amWidgetsServices.factory('Widget', ['$resource',
	function($resource){
		return $resource('http://spa.tglrw.com:4000/widgets', {}, {
			query: {method:'GET', params:{userId:'widgets'}, isArray:true}
		});
	}]);

/* Endpoints

## The endpoints are as follows:
- GET `/users` [http://spa.tglrw.com:4000/users](http://spa.tglrw.com:4000/users)
- GET `/users/:id` [http://spa.tglrw.com:4000/users/:id](http://spa.tglrw.com:4000/users/:id)
- GET `/widgets` [http://spa.tglrw.com:4000/widgets](http://spa.tglrw.com:4000/widgets)
- GET `/widgets/:id` [http://spa.tglrw.com:4000/widgets/:id](http://spa.tglrw.com:4000/widgets/:id)
- POST `/widgets` for creating new widgets [http://spa.tglrw.com:4000/widgets](http://spa.tglrw.com:4000/widgets)
- PUT `/widgets/:id` for updating existing widgets [http://spa.tglrw.com:4000/widgets/:id](http://spa.tglrw.com:4000/widgets/:id)

*/