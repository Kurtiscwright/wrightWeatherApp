'use strict';

/**
 * @ngdoc service
 * @name wrightWeatherAppApp.current
 * @description
 * # current
 * Factory in the wrightWeatherAppApp.
 */
angular.module('wrightWeatherAppApp')
  .factory('current', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
