/**
 ** Miranda Johnson
 * FWF Week 2
 */

var employDir = angular.module('employDir',[]);

    employDir.controller('employController', function($scope) {

        $scope.employees = [
            {name: "Miranda Johnson", address: "90210 N. Wiseria Lane, Apt. A", city: "HollyWood", state: "CA", zip: "90210"},
            {name: "Jackie Chan", address: "90210 N. Wiseria Lane, Apt. B", city: "HollyWood", state: "CA", zip: "90210"},
            {name: "Vanessa Willams", address: "90210 N. Wiseria Lane, Apt. C", city: "HollyWood", state: "CA", zip: "90210"}
        ];

        $scope.addEmp = function() {

            $scope.employees.push($scope.newEmp);
        };

        this.getEmp = function () {
            var info = localStorage.getItem("EmpStorage");
            employees= JSON.parse(info) || employees;
            return employees;
        };

        this.newEmp = function (newItem) {
            employees.push(newItem);
            var info = JSON.stringify(employees);
            localStorage.setItem("EmpStorage", info);
        };

        this.removeEmp = function (newItem) {
            employees.splice(newItem, 1);
            var info = JSON.stringify(employees);
            localStorage.setItem("EmpStorage", info);

        };
    });