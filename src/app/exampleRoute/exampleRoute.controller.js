/**
 * @ngdoc controller
 * @name Angular.controller:exampleRoute
 *
 * @description
 * Controller exampleRoute
 *
 * **Note:** documentation needs to be updated as logic is added
 *
 */
angular.module('Angular').controller('exampleRoute', [ 
function () {

  console.log('Started controller exampleRoute');

  if (true) {
  	$('#success').show();
  	$('#danger').hide();
  }
  else {
  	$('#success').hide();
  	$('#danger').show();
  } 	

  console.log('Ended controller exampleRoute'); 

}]);
