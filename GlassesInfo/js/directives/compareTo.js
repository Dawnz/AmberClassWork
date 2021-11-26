app.directive("compareTo", function () {
   return {
      require: "ngModel",
      scope: {
         cPassword: "=compareTo",
      },
      link: function (scope, element, attributes, modelVal) {
         modelVal.$validators.compareTo = function (val) {
            return val == scope.cPassword;
         };

         scope.$watch("cPassword", function () {
            modelVal.$validate();
         });
      },
   };
});
