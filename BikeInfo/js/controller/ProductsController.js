app.controller("ProductsController", [
   "$scope",
   "$location",
   "PartsService",
   function ($scope, $location, PartsService) {
      // pulls data
      // $scope.search = {
      //    val: "",
      // };
      $scope.resetSearch = function () {
         $scope.search.val = "";
      };
      PartsService.then(function onSuccess(response) {
         $scope.products = response.data;
      }).catch(function onError(data) {
         console.error("Caa find the file ennu bossman");
      });

      $scope.pushCategory = function (category) {
         $scope.searchCriteria = "";
         // console.log($scope.products[$routeParams]);
         //  let category1 = new Set(
         //     $scope.products.map((product) => product.category)
         //  );
         //  console.log(category1[category1.indexOf(category)]);
         $scope.categories = $scope.products.filter(
            (product) => product.category == category
         );
         //  $scope.categories.map((category) => console.log(category));
         // console.log(category);
         //  console.log(val);
         //  console.log($scope.products.category.map((category) => category));
         $location.path("category/" + category);

         // console.log("category/" + category);

         // return $scope.products.indexOf(product);
      };
      $scope.pushItem = function (product) {
         // $scope.searchCriteria = "";
         // $scope.$render();
         // console.log($scope.searchCriteria);
         // $scope.searchCriteria = "test";
         // console.log($scope.products[$routeParams]);
         $location.path("item/" + $scope.products.indexOf(product));
         $scope.search.val = "";
         // console.log($scope.search.val);
         // return $scope.products.indexOf(product);
      };
      // });
   },
]);
