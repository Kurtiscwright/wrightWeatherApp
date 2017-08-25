'use strict';

/**
 * @ngdoc overview
 * @name wrightWeatherAppApp
 * @description
 * # wrightWeatherAppApp
 *
 * Main module of the application.
 */
angular
  .module('wrightWeatherAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name wrightWeatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wrightWeatherAppApp
 */
angular.module('wrightWeatherAppApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name wrightWeatherAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wrightWeatherAppApp
 */
angular.module('wrightWeatherAppApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('wrightWeatherAppApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<!doctype html> <html> <head> <meta charset=\"utf-8\"> <title></title> <meta name=\"description\" content=\"\"> <meta name=\"viewport\" content=\"width=device-width\"> <!-- Place favicon.ico and apple-touch-icon.png in the root directory --> <!-- build:css(.) styles/vendor.css --> <!-- bower:css --> <!-- endbower --> <!-- endbuild --> <!-- build:css(.tmp) styles/main.css --> <link rel=\"stylesheet\" href=\"styles/main.css\"> <!-- endbuild --> </head> <body ng-app=\"wrightWeatherAppApp\"> <!--[if lte IE 8]>\n" +
    "      <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n" +
    "    <![endif]--> <!-- Add your site or application content here --> <div class=\"header\"> <div class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"container\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#js-navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> <a class=\"navbar-brand\" href=\"#/\">wrightWeatherApp</a> </div> <div class=\"collapse navbar-collapse\" id=\"js-navbar-collapse\"> <h2>An Adding Machine!!</h2> <div ng-app ng-init=\"firstnum=1;secondnum=2\"> <input type=\"number\" min=\"0\" ng-model=\"firstnum\"> plus <input type=\"number\" min=\"0\" ng-model=\"secondnum\"> equals <span class=\"label label-success\">{{firstnum + secondnum}}</span> </div> <ul class=\"nav navbar-nav\"> <li class=\"active\"><a href=\"../views/main.html\">Home</a></li> <li><a ng-href=\"../views/about.html\">About</a></li> <li><a ng-href=\"#/\">Contact</a></li> </ul> </div> </div> </div> </div> <div class=\"container\"> <div ng-view=\"\"></div> </div> <div class=\"footer\"> <div class=\"container\"> <p><span class=\"glyphicon glyphicon-heart\"></span> from the Yeoman team</p> </div> </div> <!-- Google Analytics: change UA-XXXXX-X to be your site's ID --> <script>!function(A,n,g,u,l,a,r){A.GoogleAnalyticsObject=l,A[l]=A[l]||function(){\n" +
    "       (A[l].q=A[l].q||[]).push(arguments)},A[l].l=+new Date,a=n.createElement(g),\n" +
    "       r=n.getElementsByTagName(g)[0],a.src=u,r.parentNode.insertBefore(a,r)\n" +
    "       }(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n" +
    "\n" +
    "       ga('create', 'UA-XXXXX-X');\n" +
    "       ga('send', 'pageview');</script> <!-- build:js(.) scripts/vendor.js --> <!-- bower:js --> <script src=\"bower_components/jquery/dist/jquery.js\"></script> <script src=\"bower_components/angular/angular.js\"></script> <script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js\"></script> <script src=\"bower_components/angular-animate/angular-animate.js\"></script> <script src=\"bower_components/angular-aria/angular-aria.js\"></script> <script src=\"bower_components/angular-cookies/angular-cookies.js\"></script> <script src=\"bower_components/angular-messages/angular-messages.js\"></script> <script src=\"bower_components/angular-resource/angular-resource.js\"></script> <script src=\"bower_components/angular-route/angular-route.js\"></script> <script src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script> <script src=\"bower_components/angular-touch/angular-touch.js\"></script> <!-- endbower --> <!-- endbuild --> <!-- build:js({.tmp,app}) scripts/scripts.js --> <script src=\"scripts/app.js\"></script> <script src=\"scripts/controllers/main.js\"></script> <script src=\"scripts/controllers/about.js\"></script> <!-- endbuild --> </body> </html>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Guten Tag!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );

}]);
