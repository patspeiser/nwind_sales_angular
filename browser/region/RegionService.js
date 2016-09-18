angular.module('acme-sales')
	.factory('RegionService', function($http){
		var regions = [];

		return {
			findAll: function(){
				return $http.get('/api/regions')
					.then(function(result){
						angular.copy(result.data, regions);
						return regions;
					})
			},

			create: function(region){
				return $http.post('/api/regions', region)
					.then(function(result){
						regions.push(result.data);
					});
			},

			destroy: function(region){
				return $http.delete('/api/regions/' + region.id)
				.then(function(){
					var index = regions.indexOf(region);
					regions.splice(index, 1);
				})
			}

		}
	});