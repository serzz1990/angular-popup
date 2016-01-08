'use strict';


angular

	.module('app', ['angular-popup'])

	.controller('AppController', ['$scope', 'Popup', '$timeout', function($scope, Popup, $timeout) {


		$timeout(function(){

			Popup.open({
				title: 'попапчик',
				content: 'Контент',
				confirm : {
					text: 'Моя кнопка'
				}
			});

		}, 1000);


	}]);
