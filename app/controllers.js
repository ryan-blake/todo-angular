'use strict';

angular.module('todoApp.controller',[])
  .controller('todoController', ["$scope","$filter", function($scope, $filter){
    $scope.newTask = "";
    $scope.pendingCount= 3;

    $scope.taskList = [
      {description: "buy tickets", done:false},
      {description: "make reservation ", done:false},
      {description: "chill", done:false}
    ];

    $scope.addTodo = function() {
      $scope.taskList.push({description: $scope.newTask, done:false});
      $scope.newTask = "";
    };

    $scope.deleteTodo = function(index){
      $scope.taskList.splice(index, 1);
    };

    $scope.$watch('taskList', function() {
      $scope.pendingCount = $filter('filter')($scope.taskList, {done : false}).length;
    }, true)

    $scope.clearCompleted = function () {
      $scope.taskList = $filter('filter')($scope.taskList, {done: false});
    };

  }]);
