angular.module('acme-sales', ['ui.router']);

angular.module('acme-sales')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/home.html'
			})
			.state('regions', {
				url: '/regions',
				templateUrl: '/region/regions.html',
				controller: 'RegionListCtrl'
			})
			.state('salesPeople', {
				url: '/salesPeople',
				templateUrl: '/salesPerson/salesPeople.html',
				controller: 'SalesPersonListCtrl'
			})

			$urlRouterProvider.otherwise('/');

	})