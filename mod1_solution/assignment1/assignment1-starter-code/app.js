(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', function($scope) {
        $scope.dishes = "";

        $scope.checkLunch = function() {
          var dishesNumber = $scope.dishes.split(",").filter(function (dish){
            return dish.trim().length > 0;
          }).length;

          if (dishesNumber > 0){
            $scope.status = 'OK';
            $scope.result = dishesNumber <= 3 ? "Enjoy!" : "Too much!";
          } else {
            $scope.status = 'ERROR';
            $scope.result = "Please enter data first";
          }
        }
  }]);
})();
