angular.module('Angular').config([ '$routeProvider', 
function ($routeProvider) {
  
  $routeProvider.when('/todo', {
    templateUrl: 'app/todo/todo.html',
    controller: 'todoCtrl',
    controllerAs: 'todoCtrl' 
  });

}]);
