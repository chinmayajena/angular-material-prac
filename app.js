var app = angular.module('MyApp', ['ngMaterial', 'ngRoute']);

app.config(function ($routeProvider, $mdIconProvider) {

  $routeProvider
    .when('/', {
      templateUrl:'view0.html',
      controller:'viewZeroController'
    })

    .when('/about',{
      templateUrl: 'about.html',
      controller: 'aboutController'
    });


  $mdIconProvider
    .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
    .defaultIconSet('img/icons/sets/core-icons.svg', 24);


});


app.controller("mainController", function ($scope) {

});

app.controller("viewZeroController", function ($scope, $mdDialog) {

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

});

app.controller("aboutController", function ($scope) {

  $scope.message = "This is a practice tutorial!"

});