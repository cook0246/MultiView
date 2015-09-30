'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router', 'ngStorage'])

myApp.config(function($stateProvider, $urlRouterProvider) { 
	$urlRouterProvider.otherwise('/main');

	$stateProvider
	    .state('main', {
	      url: '/main',
	      controller: 'MainController',
	      templateUrl: 'views/main-content.html'
	})
        .state('tab2', {
          url: '/tab2',
          controller:'tab2controller',
          templateUrl: 'views/tab2-content.html'
    })
        .state('tab3', {
          url: '/tab3',
          controller:'tab3controller',
          templateUrl: 'views/tab3-content.html'
    })

});