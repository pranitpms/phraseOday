(function () {
    
    angular.module("phraseOday")
     .config(function ($urlRouterProvider, $anchorScrollProvider, $uiViewScrollProvider) {

        $urlRouterProvider.otherwise('/');
        $uiViewScrollProvider.useAnchorScroll();
        $anchorScrollProvider.disableAutoScrolling();

    });
})();