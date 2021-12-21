app.factory("ItemService", [
   "$http",
   function ($http) {
      return $http.get("/GlassesInfo/js/service/products.json");
   },
]);
