/// <reference path="angular.min.js" />

var myApp = angular
.module("myModule", ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
        .when("/phraseOftheDay", {
            templateUrl: "Template/PhraseOftheDay.html",
            controller: "phraseOftheDayController"
        })
         .when("/yesterdayPhraseOftheDay", {
             templateUrl: "Template/YesterdayPhraseOftheDay.html",
             controller: "yesterdayPhraseOftheDayController"
         })
         .when("/wordOftheDay", {
             templateUrl: "Template/WordOftheDay.html",
             controller: "wordOftheDayController"
         })
        .when("/quoteOftheDay", {
            templateUrl: "Template/QuoteOftheDay.html",
            controller: "quoteOftheDayController"
        })
        .when("/aboutus", {
            templateUrl: "Template/AboutUs.html",
            controller: "aboutUsController"
        })
         .when("/contactus", {
             templateUrl: "Template/ContactUs.html",
             controller: "contactUsController"
         })
    .otherwise({ redirectTo: "/phraseOftheDay" })

})
.controller("phraseOftheDayController", ['$scope', '$http', function ($scope, $http) {

    $scope.today = new Date();
    var day = $scope.today.getDate();
    var month = $scope.today.getMonth();

    $http.get('JsonData/phraseData.json').success(function (data) {
        $scope.phrases = data; // get data from json
        angular.forEach($scope.phrases, function (item) {
            var date = item.date;
            if (date.day === day && date.month === month) {
                $scope.todaysPhrase = item;
                return;
            }
        })
    });
    $scope.redirect = function () {
        window.location = "#/yesterdayPhraseOftheDay";
    }
}])
.controller("yesterdayPhraseOftheDayController", ['$scope', '$http', function ($scope, $http) {

    $scope.today = new Date();
    var day = $scope.today.getDate();
    var month = $scope.today.getMonth();

    $http.get('JsonData/phraseData.json').success(function (data) {
        $scope.phrases = data; // get data from json
        angular.forEach($scope.phrases, function (item) {
            var date = item.date;
            if (date.day === day - 1 && date.month === month) {
                $scope.yesterdayPhrase = item;
                return;
            }
        })
    });
    $scope.redirect = function () {
        window.location = "#/phraseOftheDay";
    }
}])
.controller("wordOftheDayController", ['$scope', '$http', function ($scope, $http) {
    $scope.today = new Date();
    var day = $scope.today.getDate();
    var month = $scope.today.getMonth();

    $http.get('JsonData/wordData.json').success(function (data) {
        $scope.words = data; // get data from json
        angular.forEach($scope.words, function (item) {
            var date = item.date;
            if (date.day === day && date.month === month) {
                $scope.todaysWord = item;
                return;
            }
        })
    });
}])
.controller("quoteOftheDayController", ['$scope', '$http', function ($scope, $http) {
    $scope.today = new Date();
    var day = $scope.today.getDate();
    var month = $scope.today.getMonth();

    $http.get('JsonData/quoteData.json').success(function (data) {
        $scope.quotes = data; // get data from json
        angular.forEach($scope.quotes, function (item) {
            var date = item.date;
            if (date.day === day && date.month === month) {
                $scope.todaysQuote = item;
                return;
            }
        })
    }); 
}])
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
        
})
.controller("aboutUsController")
.controller("contactUsController")





