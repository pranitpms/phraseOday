
(function () {
    angular.module('phraseOday')
       .controller("wordController", function (wordData) {

            var vm = this;
            vm.todaysWord = null;
            vm.words = wordData;

            vm.today = new Date();
            var day = vm.today.getDate();
            var month = vm.today.getMonth();

            angular.forEach(vm.words, function (item) {
                var date = item.date;
            if (date.day === day && date.month === month) {
                vm.todaysWord = item;
                return;
            }
        });
    })
})();