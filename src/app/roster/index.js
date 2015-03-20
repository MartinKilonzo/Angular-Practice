angular.module('Angular').config([ '$routeProvider', 
function ($routeProvider) {
  
  $routeProvider.when('/roster', {
    templateUrl: 'app/roster/roster.html',
    controller: 'roster',
    controllerAs: 'roster' 
  });

}]);
