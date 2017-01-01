
(function () {
    angular.module('phraseOday')
        .config(function ($stateProvider) {
            $stateProvider.state('word', {
                url: '/word',
                templateUrl: 'app/word/word.tplt.html',
                controller: 'wordController',
                controllerAs: 'wordCtrl',
                resolve: {
                    wordData: function (entityService) {
                        return entityService.GetData('word');
                    }
                }
            });

        });
})();
