<!--* Miranda Johnson* FWF Week 2 (setting local storage)-->


 angular.module("employDir",[]).controller("employController", function($scope) {

     $scope.emp;

     $scope.employees = [
         {name: "Miranda Johnson", address: "90210 N. Wiseria Lane, Apt. A", city: "HollyWood", state: "CA", zip: "90210"},
         {name: "Jackie Chan", address: "90210 N. Wiseria Lane, Apt. B", city: "HollyWood", state: "CA", zip: "90210"},
         {name: "Vanessa Williams", address: "90210 N. Wiseria Lane, Apt. C", city: "HollyWood", state: "CA", zip: "90210"}
     ];


     $scope.addEmp = function () {

         $scope.employees.push($scope.newEmp);
         $scope.newEmp = '';

     };


     $scope.deleteEmp = function(deletedEmp) {
         var index = $scope.employees.indexOf(deletedEmp);
         $scope.employees.splice(index, 1);

     };
 });



//var employDir = angular.module('employDir',[]);

// employDir.controller('employController', ['$scope', '$http', function (scope, http) {
// http.get('employees.json').success(function(data){
// scope.employees = data;


//     };

// });




