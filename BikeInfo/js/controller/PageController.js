app.controller("PageController", [
   "$scope",
   "PartsService",
   function ($scope, PartsService) {
      $scope.page = 1;
      PartsService.then(function onSuccess(response) {
         $scope.totalItems = response.data;
         // console.log($scope.totalItems);
         $scope.displayItems = $scope.totalItems.slice(0, 5);
      }).catch(function onError(data) {
         console.error("Caa find the file ennu bossman");
      });

      $scope.pageChanged = function () {
         var startPos = ($scope.page - 1) * 5;
         //$scope.displayItems = $scope.totalItems.slice(startPos, startPos + 3);
         console.log($scope.page);
      };
   },
]);
