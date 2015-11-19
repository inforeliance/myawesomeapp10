'use strict';

/**
 * @ngdoc function
 * @name myawesomeapp10App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myawesomeapp10App
 */
angular.module('myawesomeapp10App')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.ShowSweetAlert = function(){
      swal('Holy cow','This actually worked?!??!','success');
    };
  });
