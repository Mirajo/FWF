 /**
 //* Miranda Johnson
 // * FWF Week 3 ~
 */


 angular.module("employDir",['ngRoute'])


     .config(function($routeProvider) {

         $routeProvider.when('/view1', {
             templateUrl: "View1.html",
             controller: "View1Controller"
         }).when('/view2', {
             templateUrl: "View2.html",
             controller: "View2Controller"
         }).when('/view3', {
             templateUrl: "View3.html",
             controller: "View3Controller"

         }).otherwise({
                redirectTo: "/view1"

         });

  })

     .controller("View1Controller", function($scope){
         $scope.test = "Hello World 1";

     })

     .controller("View2Controller", function($scope){
         $scope.test = "Hello World 2";

  })

     .controller("View3Controller", function($scope) {
         $scope.test = "Hello World 3";
 })

.controller("employController", function($scope) {

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
         $scope.employees.splice(index, 1)
  }
});