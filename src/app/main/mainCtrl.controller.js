/**
 * @ngdoc controller
 * @name Angular.controller:mainCtrl
 *
 * @description
 * Controller mainCtrl
 *
 * Javascript file for learning angular, JS, and Bootstrap
 *
 */
 angular.module('Angular').controller('mainCtrl', [ 
 	function () {

 		console.log('Started controller mainCtrl'); 

 		$('h2').on('click', function() {
 			var count = parseInt( $('p span').html() );
 			$('#count').html(count + 1);
 		})

 		$('#double').on('click', function() {
 			var count = parseInt( $('p span').html() );
 			$('#count').html(count + 1);
 		})

 		$('#reset').on('click', function() {
 			$('#count').html(0);
 		})

 		$('.btn-info').on('click', function() {
 			var panelid = $(this).attr("data-panelbtn");
 			$("#" + panelid).slideDown(200);
 		})

 		$('.panel').on('mouseover', function() {
 			$(this).slideUp(200);
 		})

 		$('.button.btn').on('click', function() {
 			console.log("#panel" + $(this).html().charAt(6));
 			$("#panel" + $(this).html().charAt(6)).fadeIn(200);
 		})

 	}]);
