angular.module('acme-sales')
	.controller('CompanyStatusCtrl', function($scope, RegionService, SalesPersonService){
		RegionService.findAll()
			.then(function(regions){
				$scope.regions = regions;
				console.log($scope.regions);
			})
			.catch(function(err){
				console.log(err);
			});	

		SalesPersonService.findAll()
			.then(function(salesPeople){
				$scope.salesPeople = salesPeople
			})
			.catch(function(err){
				console.log(err);
			})	
	})