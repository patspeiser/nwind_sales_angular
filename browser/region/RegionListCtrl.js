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
			RegionService.create($scope.region)
				.then(function(region){
          $scope.region = null;
				})
				.catch(function(err){
					console.log(err);
				});
		};

		$scope.destroy = function(region){
			RegionService.destroy(region)
				.catch(function(err){
					console.log(err);
				});
		};
	});
