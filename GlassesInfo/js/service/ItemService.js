app.factory("ItemService", [
   "$http",
   function ($http) {
      return $http
         .get("./service/products.json")
         .success(function (data) {
            return data;
         })
         .error(function (data) {
            return data;
         });
   },
]);
