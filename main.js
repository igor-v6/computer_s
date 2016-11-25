var MainModule = angular.module("Computer", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  Config($routeProvider);
}]);

// Controllers

MainModule.controller('MainController', ['$scope', '$http', function($scope, $http) {
  MainController($scope, $http);
}]);

MainModule.controller('ServicesController', ['$scope', '$http', function($scope, $http) {
  ServiceController($scope, $http);
}]);

MainModule.controller('ContactController', ['$scope', '$http', function($scope, $http) {
  ContactController($scope, $http);
}]);

var MainController = function(scope, http) {
  http.get("services.json").then(function servicesCallback(response) {
    scope.services = response.data;
  });
}

var ServiceController = function(scope, http) {
  http.get("services.json").then(function servicesCallback(response) {
    scope.services = response.data;
  });
}

var ContactController = function(scope, http) {
  http.get("locations.json").then(function locationsCallback(response) {
    scope.locations = response.data;
  });
}

// Config 

var Config = function(routeProvider) {
  routeProvider.
    when('/index', {
      templateUrl: 'main.html',
      controller: 'MainController'
    }).
    when('/about', {
      templateUrl: 'about.html',
      controller: 'MainController'
    }).
    when('/services', {
      templateUrl: 'services.html',
      controller: 'ServicesController'
    }).
    when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactController'
    }).otherwise({
      redirectTo:'index'
    });
}