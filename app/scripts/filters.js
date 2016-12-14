'use strict';

angular.module('wfhApp')
	.filter('reverse',function(){
		return function(items){
			return items.slice().reverse();
		};
	})
;