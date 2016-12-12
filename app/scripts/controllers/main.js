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

    $scope.slides = [{
        image: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-(chemical properties)-04.jpg',
        audio: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-04.mp3'
    },{
        image: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-(chemical properties)-17.jpg',
        audio: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-17.mp3'
    },{
        image: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-(chemical properties)-30.jpg',
        audio: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-30.mp3'
    },{
        image: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/resources/slide/4486/Water-(chemical properties)-01.jpg',
        audio: 'https://s3-ap-southeast-1.amazonaws.com/lgwarehouse/media/resources/slide/4486/Water-chemical-properties-01.mp3'
    }];

    var load = function () {
        for(var i=0; i<4; i++) {
            audios.push(ngAudio.load($scope.slides[i].audio));
        }
        $timeout(function () {
            audios[0].play();
        },1000);
    }();

    $scope.$watch(function () {
        for (var i = 0; i < $scope.slides.length; i++) {
            if ($scope.slides[i].active) {
                return i;
            }
        }
    }, function (currentIndex, previousIndex) {
        $timeout.cancel(play_timeout);
        audio_duration = 1000 * audios[currentIndex].duration;
        audios[previousIndex].stop();
        play_timeout = $timeout(function () {
            audios[currentIndex].play();
        }, 500);
        $scope.interval = parseInt(5000 + audio_duration + 500);
    });

    $scope.play = function () {
        audio.play();
    }
  });
