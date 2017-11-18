(function() {
  'use strict';

  angular
      .module('shhhhhhhhitFrontend')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec($http) {
    
    var apiHost = "http://127.0.0.1:5000";
    
    var service = {
      apiHost: apiHost,
      getToilets: getToilets
    };

    return service;

    function getToilets(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost + '/toilets?per_page=' + limit)
        .then(getToiletsComplete)
        .catch(getToiletsFailed);

      function getToiletsComplete(response) {
        return response.data;
        //return [];
      }

      function getToiletsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
