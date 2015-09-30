'use strict';

 myApp.controller('tab3controller', function($scope, $localStorage){
     
$scope.$local = $localStorage.$default({
    "list3":[{
        "text": "Sour keys"
    }, {
        "text": "Skittles"
    }, {
        "text": "M&Ms"
    }]

});

    $scope.addTask = function(){
        $scope.$local.list3.push($scope.newTask);
        $scope.newTask = {};
    }

    //Deletes a task from $scope.tasks
    $scope.deleteTask = function(taskIndex){
        $scope.$local.list3.splice(taskIndex, 1);    
    }

  
 });