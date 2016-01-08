'use strict';

import Popup from './services/Popup';
import popup from './directives/popup';


angular
    .module('angular-popup', [])
    .service('Popup', Popup)
    .directive('popup', popup);