 /**
 * Miranda Johnson
  * FWF Week 1
 */

 angular.module("employDir",[]).controller("employCon",function($scope, dataService) {
     $scope.employees = dataService.getInfo();
     $scope.newEmp = function() {
         dataService.newEmp($scope.addEmployee);

         $scope.addEmployee = " ";

     }
     $scope.deleteEmp = function($index){
        dataService.removeEmp($index);

     }

 });