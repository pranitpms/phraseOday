
(function () {

    angular.module('phraseOday')
    .controller("quoteController", function (quoteData) {

        var vm = this;
        vm.quotes = [];
        vm.todaysQuote = null;

        vm.today = new Date();
        var day = vm.today.getDate();
        var month = vm.today.getMonth();

        vm.quotes = quoteData;
        angular.forEach(vm.quotes, function (item) {
            var date = item.date;
            if (date.day === day && date.month === month) {
                vm.todaysQuote = item;
                return;
            }
        })
    })
})();

