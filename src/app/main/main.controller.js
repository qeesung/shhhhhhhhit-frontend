(function() {
  'use strict';

  angular
    .module('shhhhhhhhitFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $interval) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1510929393182;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      var timer = $interval(function() {
        webDevTec.getToilets(10).then(function(data) {
          vm.awesomeThings = data;

          var i = 0;
          angular.forEach(vm.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = i++;
          });
        });

      },500);
    }
  }
})();
