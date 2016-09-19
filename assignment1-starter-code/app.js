(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkMeal = function () {
    if ($scope.meals && $scope.meals.split (',').length > 3) {
      $scope.message = "Too much!";
    }
    else if ($scope.meals) {
      $scope.message = "Enjoy";
    }
    else {
      $scope.message = "Please enter data first";
    }
  };
}

})();
