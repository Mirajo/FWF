//Miranda Johnson
//FWF Practice

angular.module("employDir").service("dataService",function() {
    var employees = [];

    this.getEmp = function () {
        return employees
    };

    this.addEmp = function (newEmp) {
        employees.push(newEmp)
    };

    this.deleteEmp = function (deletedEmp) {
        employees.splice(employees.indexOf(deletedEmp),1)
    };

});