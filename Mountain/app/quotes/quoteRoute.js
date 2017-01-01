
(function () {
    angular.module('phraseOday')
        .config(function ($stateProvider) {
            $stateProvider.state('quote', {
                url: '/quote',
                templateUrl: 'app/quotes/quotes.tplt.html',
                controller: 'quoteController',
                controllerAs: 'quoteCtrl',
                resolve: {
                    quoteData: function (entityService) {
                        return entityService.GetData('quote');
                    }
                }
            });

        });
})();
