/**
 * Created by mirajo on 9/8/14.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('MyController',
function MyController($scope, $http) {
   $http.get('js/data.json').success(function(data){

       });
});