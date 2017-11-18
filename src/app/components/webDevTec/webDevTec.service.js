(function() {
  'use strict';

  angular
      .module('shhhhhhhhitFrontend')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec($http) {

    var apiHost = "http://106.14.185.220:5000";

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
        var toilets = response.data;
        toilets.forEach(function(toilet){
          toilet.time_diff = Math.round((Date.now() - new Date(toilet.updated_at))/1000);
        });
        return toilets;
      }

      function getToiletsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
