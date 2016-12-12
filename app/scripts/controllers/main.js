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
    var audios = [];
    var play_timeout = null;
    var audio_duration = 0;

    $scope.slides = [{
        image: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-(chemical properties)-04.jpg',
        audio: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-04.mp3'
    },{
        image: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-(chemical properties)-17.jpg',
        audio: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-17.mp3'
    },{
        image: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-(chemical properties)-30.jpg',
        audio: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-30.mp3'
    }];

    var load = function () {
        for(var i=0; i<3; i++) {
            audios.push(ngAudio.load($scope.slides[i].audio));
        }
    }();

    $scope.$watch('active', function (currentIndex, previousIndex) {
        $timeout.cancel(play_timeout);
        console.log(audios[currentIndex]);
        if(audios[currentIndex] !== undefined) {
            audio_duration = 1000 * parseFloat(audios[currentIndex].duration);
            console.log(audios[currentIndex].duration, audio_duration);
        }
        if(audios[previousIndex] !== undefined) {
            audios[previousIndex].stop();
        }
        play_timeout = $timeout(function () {
            audios[currentIndex].play();
            // console.log($scope.interval);
        }, 500);
        $scope.interval = parseInt(10000);
    });

    $scope.play = function () {
        audio.play();
    }
  });
