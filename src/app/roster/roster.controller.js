/**
 * @ngdoc controller
 * @name Angular.controller:roster
 *
 * @description
 * Controller roster
 *
 * **Note:** documentation needs to be updated as logic is added
 *
 */
 angular.module('Angular').controller('roster', ['$scope', 'localStorageService',
 	function ($scope, localStorageService, TeamFactory, PlayerFactory) {

 		// Initialization
 		console.log('Started controller roster');
 		$('#warning').show();
 		$('#danger').hide();

 		console.log(localStorageService.keys());

 		var savedPlayers = localStorageService.get('players');

 		$scope.players = savedPlayers || [];

 		$scope.$watch('players', function () {
 			localStorageService.set('players', $scope.players);
 		}, true);

 		// Method to add new players
 		$scope.addPlayer = function() {
 			if ($scope.playerInfo) {
 				info = $scope.playerInfo.replace(/, /g, '/').replace(/,/g, '/').split('/');

 				var validPlayer = true;

 				for (var i = 3; i >= 0; i--) {
 					if(!info[i]) {
 						validPlayer = false;
 					}
 				};

 				var newPlayer = {
 					firstName:      info[0],
 					lastName:       info[1],
 					playerNumber:   info[2],
 					position:       info[3],
 				};

 				var playerExists = false;

 				for (var i = $scope.players.length - 1; i >= 0; i--) {
 					if ($scope.players[i].lastName === newPlayer.lastName && $scope.players[i].firstName === newPlayer.firstName) {
 						playerExists = true;
 					}
 				}

 				if (!validPlayer || playerExists) {
 					!validPlayer ? alert("Invalid Entry.") : alert("The player already exists on the roster.");
 				} 

 				else {
 					$scope.players.push(newPlayer);
 				}

 				$scope.playerInfo = '';

			/*
 			validPlayer 	? 
 			(playerExists 	? alert("The player already exists on the roster.") : $scope.players.push(newPlayer)) 
 							: alert("Invalid Entry.");
 							console.log($scope.players);*/
 						}
 					};

 					$scope.removePlayer = function (index) {
 						$scope.players.splice(index, 1);
 			/*for (var i = $scope.players.length - 1; i >= 0; i--) {
				if ($scope.players[i].lastName === lastName && $scope.players[i].firstName === firstName) {
					playerExists = true;
				}
			};*/
		};

		$scope.getInfo = function (index) {
			var player = $scope.players[index];
			return "#" + player.playerNumber + " " + player.firstName.charAt(0) + "." + player.lastName + ": " + player.position;
		};

		console.log('Ended controller roster');
		$('#success').show();
		$('#warning').hide();

	}]);
//TODO Figure out how to redefine the controller like in the Ang. Tut.
//Martin, Kilonzo, 88, Defense