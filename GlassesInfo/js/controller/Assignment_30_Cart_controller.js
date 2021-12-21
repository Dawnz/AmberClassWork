app.controller("CartController", [
   "$scope",
   "$http",
   function ($scope, CartService) {
      //   $scope.productList = [];
      // console.log(CartService.carts);
      $scope.carts = [];
      $scope.total = 0;
      $scope.count = 0;
      $scope.getLength = function () {
         $scope.count = $scope.carts.length;
         // console.log($scope.count);
      };
      //   $http.get("/GlassesInfo/js/service/products.json").then(function (res) {
      //      // console.log(data);
      //      $scope.products = res.data;
      //   });
      $scope.addToCart = function (product) {
         if (product) {
            $scope.carts.push({
               itemName: product.name,
               itemPrice: product.price,
               itemImg: product.cover,
            });
         }
         //  console.log($scope.carts.length);
         $scope.getLength();
      };
      $scope.getTotals = function () {
         let initialVal = 0;
         $scope.total = $scope.carts.reduce(
            (x, y) => x + y["itemPrice"],
            initialVal
         );
      };

      //   $scope.removeCart = function (product) {
      //      $scope.carts.splice($scope.products.indexOf(product), 1);
      //      getTotals();
      //   };
      $scope.removeCart = function (index) {
         $scope.carts.splice(index, 1);
         $scope.getTotals();
         $scope.getLength();
      };
   },
]);
