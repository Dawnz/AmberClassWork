app.controller("ProductsController", [
   "$scope",
   "$http",
   "$location",
   // "ItemService",
   function ($scope, $http, $location) {
      $http.get("/GlassesInfo/js/service/products.json").then(function (res) {
         // console.log(data);
         $scope.products = res.data;
         // $scope.removeItem = function (product) {
         //    $scope.products.splice($scope.products.indexOf(product), 1);
         // };
         $scope.pushItem = function (product) {
            // console.log("items/" + $scope.products.indexOf(product));
            // console.log($location.path());
            $location.path("item/" + $scope.products.indexOf(product));
            // return $scope.products.indexOf(product);-
         };
      });
   },
]);
