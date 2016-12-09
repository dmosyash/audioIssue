'use strict';

/**
 * @ngdoc function
 * @name audioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the audioApp
 */
angular.module('audioApp')
  .controller('MainCtrl', function (ngAudio) {
    var load = function () {
        var audio = ngAudio.load('https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-17.mp3');
        audio.play();
    }();
  });
