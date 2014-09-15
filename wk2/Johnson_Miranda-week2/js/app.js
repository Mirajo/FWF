 /**
 * Miranda Johnson
  * FWF Week 1
 */

 var app = angular.module('employDir',[]);
  app.controller('employController',function($scope, data) {

     $scope.employees = data.getEmp();

     $scope.newEmp = function() {
         data.newEmp($scope.emp);

         $scope.emp = " "

     };
     $scope.deleteEmp = function($index){
        data.removeEmp($index);

     }

 });

 //app.controller()