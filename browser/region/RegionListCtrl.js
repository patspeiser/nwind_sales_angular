angular.module('acme-sales')
	.controller('RegionListCtrl', function($scope, RegionService){
		RegionService.findAll()
			.then(function(regions){
				$scope.regions = regions;
			})
			.catch(function(err){
				console.log(err);
			});

		$scope.create = function(){
			RegionService.create({ zipCode: $scope.zipCode})
				.then(function(region){
					$scope.regions.push(region)
				})
				.catch(function(err){
					console.log(err);
				})
		}
	})