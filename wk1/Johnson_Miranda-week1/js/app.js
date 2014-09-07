 /**
 * Miranda Johnson
  * FWF Week 1
 */


function DBController($scope){

     $scope.listName;

     $scope.listArray = ['tomatos', 'rice', 'apples'];

     $scope.addName = function(){
         $scope.listArray.push($scope.listName);

         $scope.listName = '';

     }

    $scope.deleteName = function(deletedName){
        var index = $scope.listArray.indexOf(deletedName);
        $scope.listArray.splice(index,1);

    }
 }