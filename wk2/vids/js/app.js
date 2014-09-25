//Miranda Johnson
//FWF Practice

angular.module("employDir").controller("employController",function($scope,dataService) {

    $scope.emp;

    $scope.employees = dataService.getEmp();

    $scope.addEmp = function() {
        dataService.addEmp($scope.emp);
        $scope.emp = '';
    }

    $scope.deleteEmp = function(deletedEmp){
        dataService.deleteEmp(deletedEmp);
    }
});
