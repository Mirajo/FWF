 /**
 * Miranda Johnson
  * Lynda.com ~ Angular~ practice
 */

var myApp = angular.module('myApp', [
     'ngRoute',
     'artistControllers'

     ]);
 myApp.config(['$routeProvider', function($routeProvider) {
     $routeProvider.
     when('/list', {
         templateUrl: 'lib/partials/list.html',
         controller: 'ListController'
     }).
     when('/details/:itemid', {
         templateUrl: 'partials/details.html',
         controller: 'DetailsController'
     }).
     otherwise({
     redirectTo: '/list'

         });
 }]);