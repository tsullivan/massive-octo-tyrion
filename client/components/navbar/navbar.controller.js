angular.module('qtipPoisonerApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    'use strict';

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
