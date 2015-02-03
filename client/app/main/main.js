angular.module('qtipPoisonerApp')
  .config(function ($routeProvider) {
    'use strict';

    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
