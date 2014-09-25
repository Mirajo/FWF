//Miranda Johnson
// FWF Practice

   angular.module("employDir").service("dataService",function() {
    var employees = [ {name: "Miranda Johnson", address: "90210 N. Wiseria Lane, Apt. A", city: "HollyWood", state: "CA", zip: "90210"},
        {name: "Jackie Chan", address: "90210 N. Wiseria Lane, Apt. B", city: "HollyWood", state: "CA", zip: "90210"},
        {name: "Vanessa Williams", address: "90210 N. Wiseria Lane, Apt. C", city: "HollyWood", state: "CA", zip: "90210"}
    ];

    this.getEmp = function () {
        return employees;
    };

    this.addEmp = function (newEmp) {
        employees.push.(newEmp);
    };

    this.deleteEmp = function (deletedEmp) {
        employees.splice.(employees.indexOf(deletedEmp),1);
    }
});
