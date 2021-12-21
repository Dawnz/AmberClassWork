app.controller("ItemDetailsController", [
   "$scope",
   "$routeParams",
   "PartsService",
   function ($scope, $routeParams, PartsService) {
      $scope.searchCriteria = "";
      PartsService.then(function onSuccess(response) {
         $scope.detail = response.data[$routeParams.id];
      });
   },
]);
