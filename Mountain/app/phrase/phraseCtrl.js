(function () {

    angular.module('phraseOday')
        .controller('phraseController', function (phraseList,$state) {

            var vm = this;

            vm.phrase          = {};
            vm.TodaysPhrase    = null;
            vm.YesterdayPhrase = null;
            vm.phraseList      = phraseList;
            vm.today           = new Date();
            var day            = vm.today.getDate();
            var month = vm.today.getMonth();
            vm.isToday = true;

            var init = function () {
                if (!vm.TodaysPhrase && vm.phraseList) {
                    angular.forEach(vm.phraseList, function (item) {
                        var date = item.date;
                        if (date.day === day && date.month === month) {
                            vm.TodaysPhrase = vm.phrase = item;
                            return;
                        }
                    });
                }
                vm.phrase = vm.TodaysPhrase;
                return;
            }

             var yesterDay = function () {
                 if (!vm.YesterdayPhrase && vm.phraseList) {

                     var yesterday = new Date();
                     yesterday.setDate(day - 1);
                     var preday = yesterday.getDate();
                     var premonth = yesterday.getMonth();

                    angular.forEach(vm.phraseList, function (item) {
                        var date = item.date;
                        

                        if (date.day === preday && date.month === premonth) {
                            vm.YesterdayPhrase = vm.phrase = item;
                            return;
                        }
                    });
                 }
                 vm.phrase = vm.YesterdayPhrase;
                 return;
            }

             vm.redirect = function (isToday) {
                 vm.isToday = isToday;
                 if (isToday) {
                     init();
                 }
                 else {
                     yesterDay();
                 }
             };

            init();
        });
})();