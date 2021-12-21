const app = angular.module("myApp", ["ngAnimate", "ngRoute", "ui.bootstrap"]);

// this is the routing config
app.config(function ($routeProvider) {
   $routeProvider
      //this is the default location
      .when("/", {
         controller: "ProductsController",
         templateUrl: "/BikeInfo/views/landingPage.html",
      })
      // //this is the location to go when you select an Item
      .when("/category/:category", {
         controller: "CategoriesController",
         templateUrl: "/BikeInfo/views/categoryPage.html",
      })
      .when("/item/:id", {
         controller: "ItemDetailsController",
         templateUrl: "/BikeInfo/views/itemDetails.html",
      })
      .when("/cart", {
         // controller: "CartController",
         templateUrl: "/BikeInfo/views/cartItems.html",
      })
      .otherwise({
         redirectTo: "/",
      });
});
