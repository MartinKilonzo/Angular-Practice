/**
 * @ngdoc controller
 * @name Angular.controller:todo
 *
 * @description
 * Controller todo
 *
 * **Note:** documentation needs to be updated as logic is added
 *
 */
 angular.module('Angular').controller('todoCtrl', ['$scope', 'localStorageService', 
 	function ($scope, localStorageService) {

 		var savedTodos = localStorageService.get('todos');

 		$scope.todos = savedTodos || [];

 		$scope.$watch('todos', function () {
 			localStorageService.set('todos', $scope.todos);
 		}, true);

 		$scope.addTodo = function () {
 			$scope.todos.indexOf($scope.todo) === -1 ? $scope.todos.push($scope.todo) : alert("You are already doing that!");
 			$scope.todo = '';
 		}

 		$scope.removeTodo = function (index) {
 			console.log("Removed: " + $scope.todos[index]);
 			$scope.todos.splice(index, 1);
  	//$('.input-group').animate(($scope.todos.splice(index, 1)), {opacity: 0}, animationDuration, "delete"); // psplice(x,y) finds the xth element and cuts out y elements from it including it
  }
}]);