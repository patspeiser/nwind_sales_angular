angular.module('acme-sales')
	.factory('SalesPersonService', function($http){
		return {
			findAll: function(){
				return $http.get('/api/salesPeople')
					.then(function(result){
						return result.data
					})
			},

			create: function(salesPerson){
				return $http.post('/api/salesPeople', salesPerson)
					.then(function(result){
						return result.data
					})
			}

		}
	})