angular.module('acme-sales')
	.factory('SalesPersonService', function($http){
		var salesPeople = [];

		return {
			findAll: function(){
				return $http.get('/api/salesPeople')
					.then(function(result){
						angular.copy(result.data, salesPeople);
						return salesPeople;	
					});
			},

			create: function(salesPerson){
				return $http.post('/api/salesPeople', salesPerson)
					.then(function(result){
						salesPeople.push(result.data);
					});
			},

			destroy: function(salesPerson){
				return $http.delete('/api/salesPeople/' + salesPerson.id)
				.then(function(){
					var index = salesPeople.indexOf(salesPerson);
					salesPeople.splice(index, 1);
				});
			}
		};
	});
