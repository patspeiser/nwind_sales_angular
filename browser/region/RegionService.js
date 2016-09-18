angular.module('acme-sales')
	.factory('RegionService', function($http){
		return {
			findAll: function(){
				return $http.get('/api/regions')
					.then(function(result){
						return result.data
					})
			},

			create: function(region){
				console.log(region);
				return $http.post('/api/regions', region)
					.then(function(result){
						return result.data
					});
			}
		}
	});