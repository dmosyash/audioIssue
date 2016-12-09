'use strict';

/**
 * @ngdoc function
 * @name audioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the audioApp
 */
angular.module('audioApp')
  .controller('MainCtrl', function ($scope, ngAudio, $timeout) {
    var audio = null;
    var load = function () {
        audio = ngAudio.load('https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-17.mp3');
        $timeout(function () {
            audio.play();
        },1000);
    }();

    $scope.play = function () {
        audio.play();
    }
  });
