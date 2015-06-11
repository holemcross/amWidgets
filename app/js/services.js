'use strict';

/* Services */

var amWidgetsServices = angular.module('amWidgetsServices',['ngResource']);

var defaultUsers = '[{"name":"Colin","id":1,"gravatar":"http://www.gravatar.com/avatar/a51972ea936bc3b841350caef34ea47e?s=64&d=monsterid"},{"name":"Kyle","id":2,"gravatar":"http://www.gravatar.com/avatar/432f3e353c689fc37af86ae861d934f9?s=64&d=monsterid"},{"name":"Thomas","id":3,"gravatar":"http://www.gravatar.com/avatar/48009c6a27d25ef0ea03f985d1f186b0?s=64&d=monsterid"},{"name":"James","id":4,"gravatar":"http://www.gravatar.com/avatar/9372f138140c8578c82bbc77b2eca602?s=64&d=monsterid"}]';

amWidgetsServices.factory('User', ['$resource',
	function($resource){
		//return $resource('http://spa.tglrw.com:4000/users/:id', {}, {
		//	query: {method:'GET', isArray:true}
		//});
		//return defaultUsers;
		return $resource('http://spa.tglrw.com:4000/users/:id');
	}]);

amWidgetsServices.factory('Widget', ['$resource',
	function($resource){
		//return $resource('http://spa.tglrw.com:4000/widgets', {}, {
		//	query: {method:'GET', params:{userId:'widgets'}, isArray:true}
		//});
		return $resource('http://spa.tglrw.com:4000/widgets/:id');
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