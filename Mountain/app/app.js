
(function () {
    angular.module('phraseOday', [
        'ui.router'
    ])
    .controller("slideShowController", function ($scope, $timeout) {
        var slidesInSlideshow = 3;
        var slidesTimeIntervalInMs = 3000;

        $scope.slideshow = 1;
        var slideTimer =
        $timeout(function interval() {
            $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
            slideTimer = $timeout(interval, slidesTimeIntervalInMs);
        }, slidesTimeIntervalInMs);

        $scope.stopSliding = function () {
            //$timeout(function interval() {
            //    $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
            //    slideTimer = $timeout(interval, 90000);
            //}, 90000);
        };

    });
})();