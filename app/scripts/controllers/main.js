'use strict';

/**
 * @ngdoc function
 * @name wrightWeatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wrightWeatherAppApp
 */
angular.module('wrightWeatherAppApp')
.controller('MainCtrl', function ($scope, current) {
  $scope.current = current.query();
});
