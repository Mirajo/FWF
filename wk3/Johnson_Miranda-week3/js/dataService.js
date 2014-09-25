
var employDir = angular.module("employDir").service("dataService",function(){
   var employees = [];

    this.getEmp = function() {
      var str = localStorage.getItem("EmpLS");
      employees = JSON.parse(str) || employees;
      return employees;
    };


   this.addEmp = function(newEmp) {
      employees.push(newEmp);
      var str = JSON.stringify(employees);
       localStorage.setItem("EmpLS", str);
    };


    this.deleteEmp = function(deletedEmp) {
        employees.splice(deletedEmp, 1);
        var str = JSON.stringify(employees);
        localStorage.setItem("EmpLS", str);
    }

});

