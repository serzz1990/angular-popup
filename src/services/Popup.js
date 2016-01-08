'use strict';


export default ( $document ) => {


	class Popup {

		constructor () {

			$document.on('keyup', _private.methods.esc.bind(this) )

		}


		confirm () {
			if( typeof _private.data.popup.confirm.fn === 'function' )
				_private.data.popup.confirm.fn();
			_private.methods.closed();
		}

		cancel () {
			if( typeof _private.data.popup.cancel.fn === 'function' )
				_private.data.popup.cancel.fn();
			_private.methods.closed();
		}

		open (data) {

			_private.data.popup = angular.extend({}, _private.default, data);

		}

		get data () {
			return _private.data;
		}

	}

	var _private = {

		data : {
			popup : null
		},

		methods : {

			esc : function(event) {

				// ESC
				if( event.keyCode === 27 && _private.data.popup && _private.data.popup.open ) {
					this.cancel();
					angular.element(event.target).scope().$apply();
				}

			},

			closed : () => {
				_private.data.popup.open = false;
			}

		},

		default : {

			open : true,
			title: null,
			template: null,
			content: null,

			cancel : {
				text : 'Отмена',
				fn   : null
			},

			confirm: {
				text : 'Ок',
				fn   : null
			}

		}

	};


	return new Popup;


}


module.exports.$inject = [
	'$document'
];