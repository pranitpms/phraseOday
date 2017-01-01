(function () {

    angular.module('phraseOday')
        .factory('entityService', function ($http,$q) {

            var baseUrl = 'JsonData/';

            var getData = function (type) {

                var url = createUrl(type);
                var defered = $q.defer();

                $http({
                    method: 'GET',
                    url: url
                }).success(function (result) {
                    defered.resolve(result);
                }).error(function (error) {
                    defered.reject(error);
                });

                return defered.promise;
            };

            var createUrl = function (type) {
                switch (type) {
                    case 'phrase': return (baseUrl + 'phraseData.json');
                    case 'word': return (baseUrl + 'wordData.json');
                    case 'quote': return (baseUrl + 'quoteData.json');
                }
            };

            return {
                GetData : getData
            }
             
        });
})();