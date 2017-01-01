
(function () {
    angular.module('phraseOday')
        .config(function ($stateProvider) {
            $stateProvider.state('phrase',{
                url          : '/',
                templateUrl: 'app/phrase/phrase.tplt.html',
                controller   : 'phraseController',
                controllerAs : 'phraseCtrl',
                resolve: {
                    phraseList: function (entityService) {
                        return entityService.GetData('phrase');
                    }
                }
            });
                
        });
})();

