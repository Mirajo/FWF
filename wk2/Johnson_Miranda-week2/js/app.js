 /**
 * Miranda Johnson
  * FWF Week 1
 */

var employDir = angular.module('employDir',[]);

 employDir.controller('employController', ['$scope', '$http', function (scope, http) {
 http.get('employees.json').success(function(data){
 scope.employees = data;




 //var app = angular.module('employDir',[]);
 //    app.controller('employController',function($scope, data) {

//     $scope.employees = data.getEmp();

//     $scope.newEmp = function() {
//         data.newEmp($scope.addEmp);

//         $scope.addEmp = ' ';

     };

 });

 //app.controller()