app.controller("ProductsController", [
   "$scope",
   "$location",
   "ItemService",
   function ($scope, $location, ItemService) {
      ItemService.then(function onSuccess(response) {
         $scope.products = response.data;
      }).catch(function onError(data) {
         console.error("Caa find the file ennu bossman");
      });

      // console.log(test);
      $scope.pushItem = function (product) {
         // console.log($scope.products[$routeParams]);
         $location.path("item/" + $scope.products.indexOf(product));
         // return $scope.products.indexOf(product);
      };
      // });
   },
]);
