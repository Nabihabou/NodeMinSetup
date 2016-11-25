var app = angular.module('sampleApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  });

  $urlRouterProvider.otherwise('/home');
});