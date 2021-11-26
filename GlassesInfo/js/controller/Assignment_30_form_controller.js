app.controller("FormController", [
   "$scope",
   function ($scope) {
      $scope.telephone = "[1]?[- ]?[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4}";
      $scope.user = {
         password: "",
         cPassword: "",
      };
   },
]);
