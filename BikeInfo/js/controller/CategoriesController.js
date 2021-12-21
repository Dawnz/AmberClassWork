app.controller("CategoriesController", [
   "$scope",
   "$routeParams",
   "PartsService",
   function ($scope, $routeParams, PartsService) {
      PartsService.then(function onSuccess(response) {
         $scope.detail = response.data.filter(
            (products) => products.category == $routeParams.category
         );
         $scope.title = $routeParams.category;
         //  console.log($routeParams.category);
         console.log($scope.detail);
      });
   },
]);
