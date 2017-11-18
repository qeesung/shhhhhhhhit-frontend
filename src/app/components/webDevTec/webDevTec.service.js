(function($http) {
  'use strict';

  angular
      .module('shhhhhhhhitFrontend')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'F3-A-坐坑',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': '1.jpg'
      },
      {
        'title': 'F3-A-蹲坑',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': '2.jpg'
      },
    ];

    this.getTec = getTec;
    function getTec() {
      return data;
    }
  }

})();
