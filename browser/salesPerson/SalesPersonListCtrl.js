angular.module('acme-sales')
	.controller('SalesPersonListCtrl', function($scope, SalesPersonService){
		SalesPersonService.findAll()
			.then(function(salesPeople){
				$scope.salesPeople = salesPeople;
			})
			.catch(function(err){
				console.log(err);
			});

		$scope.create = function(){
			SalesPersonService.create($scope.salesPerson)
				.then(function(salesPerson){
          $scope.salesPerson = null;
				})
				.catch(function(err){
					console.log(err);
				});
		};
		
		$scope.destroy = function(salesPerson){
			SalesPersonService.destroy(salesPerson)
				.catch(function(err){
					console.log(err);
				});
		};
	})
