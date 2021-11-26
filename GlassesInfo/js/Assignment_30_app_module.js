const app = angular.module("myApp", ["ngRoute"]);

// this is the routing config
app.config(function ($routeProvider) {
   $routeProvider
      //this is the default location
      .when("/", {
         controller: "ProductsController",
         templateUrl: "/GlassesInfo/js/views/appProduct.html",
      })
      //this is the location to go when you select an Item
      .when("/item/:id", {
         controller: "ItemDetailsController",
         templateUrl: "./GlassesInfo/js/views/itemDetails.html",
      })
      .when("/cartitem", {
         // controller: "CartController","ItemDetailsController",
         templateUrl: "./GlassesInfo/js/views/cartItems.html",
      })
      .when("/user", {
         controller: "FormController",
         templateUrl: "./GlassesInfo/js/views/signUp.html",
      })
      //this is the location to go if its not a valid route
      .otherwise({
         redirectTo: "/",
      });
});
