var localDataService = angular.module('localDataService', ['ngResource']);

localDataService.factory('TimeSchedule', ['$resource',
  function($resource){
    return $resource('./app/moks/data.json?' + Math.random().toString(), {}, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
  }]);

localDataService.factory('UserInfo', ['$resource',
  function ($resource) {
      return $resource('./app/moks/userData.json?'+Math.random().toString(), {}, {
          query: {
              method: 'GET',
              isArray: false
          }
      });
  }]);


localDataService.factory('Schedule', ['$resource',
  function ($resource) {
      return $resource('./app/moks/schedule.json?' + Math.random().toString(), {}, {
          query: {
              method: 'GET',
              isArray: false
          }
      });
  }]);

localDataService.factory('Menu', ['$resource',
  function ($resource) {
      return $resource('./app/moks/menu.json?'+Math.random().toString(), {}, {
          query: {
              method: 'GET',
              isArray: true
          }
      });
  }]);

