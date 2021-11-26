app.controller("ItemDetailsController", [
   "$scope",
   "$routeParams",
   "$http",
   function ($scope, $routeParams, $http) {
      $http.get("/GlassesInfo/js/service/products.json").then(function (res) {
         $scope.detail = res.data[$routeParams.id];
         // console.log(data, $scope);
      });
      //   (function ($scope) {
      //  $scope.detail = $scope.products[$routeParams.id];
      //  $scope.detail = $routeParams.id;
      //   });
   },
]);
