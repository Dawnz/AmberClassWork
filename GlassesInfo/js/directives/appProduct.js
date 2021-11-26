app.directive("appProduct", function () {
   return {
      restrict: "E",
      scope: {
         product: "=",
      },
      templateUrl: "./GlassesInfo/js/views/appProduct.html",
   };
});
