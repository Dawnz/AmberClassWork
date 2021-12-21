app.controller("ItemDetailsController", [
   "$scope",
   "$routeParams",
   "ItemService",
   function ($scope, $routeParams, ItemService) {
      ItemService.then(function onSuccess(response) {
         $scope.detail = response.data[$routeParams.id];
         // console.log($routeParams.id);
         // $scope.test = response.data;
         // console.log(test);
      });
   },
]);
