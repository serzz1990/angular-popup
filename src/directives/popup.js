'use strict';

import Template from './template.html';


export default () => {

	return {

		replace: true,
		restrict: 'EA',
		template: Template,
		controller: ['$scope', 'Popup', ($scope, Popup) => {

			$scope.data = Popup.data;

			$scope.cancel = () => Popup.cancel();
			$scope.confirm = () => Popup.confirm();

		}]

	};

}


module.exports.$inject = [];