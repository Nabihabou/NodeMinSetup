var app = angular.module('sampleApp', []);

app.controller('sampleController', function($scope) {
  $scope.todos = [
    {name: "Clean da houss", id: 0},
    {name: "Clean da mess", id: 1}
  ]
})
