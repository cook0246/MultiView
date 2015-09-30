'use strict';

 myApp.controller('tab2controller', function($scope, $localStorage){
     
$scope.$local = $localStorage.$default({
    "list2":[{
        "text": "Carrots"
    }, {
        "text": "Green beans"
    }, {
        "text": "Tomato"
    }]

});
     
    $scope.addTask = function(){
        $scope.$local.list2.push($scope.newTask);
        $scope.newTask = {};
    }

    //Deletes a task from $scope.tasks
    $scope.deleteTask = function(taskIndex){
        $scope.$local.list2.splice(taskIndex, 1);
    }

  
 });