/**
 //* Miranda Johnson
 // * FWF Week 1
 */

 angular.module("MyApp",['ngRoute'])


     .config(function($routeProvider) {

         $routeProvider.when('/view1', {
             templateUrl: "View1.html",
             controller: "View1Controller"

         }).when('/view2', {
             templateUrl: "View2.html",
             controller: "View2Controller"

         }).when("/view3/:paramTest",{

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

     .controller("View3Controller", function($scope){
         $scope.test = "Hello World 3";

     })

     .controller("MyAppController", function($scope){
         $scope.test = "Hello World";

});