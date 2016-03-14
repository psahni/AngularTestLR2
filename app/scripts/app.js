'use strict';
angular
  .module('App2', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'      
        })
      .otherwise({
        redirectTo: '/'
      });
  });
