app.factory("CartService", function () {
      let carts = [];
      let total = 0;
      let count = 0;
   let getLength = function () {
      let count = carts.length;
      console.log(count);
   };
   //   $http.get("/GlassesInfo/js/service/products.json").then(function (res) {
   //      // console.log(data);
   //      let products = res.data;
   //   });
   let addToCart = function (product) {
      if (product) {
         carts.push({
            itemName: product.name,
            itemPrice: product.price,
            itemImg: product.cover,
         });
      }
      //  console.log(let carts.length);
      getLength();
   };
   let getTotals = function () {
      let initialVal = 0;
      let total = carts.reduce((x, y) => x + y["itemPrice"], initialVal);
   };

   //   let removeCart = function (product) {
   //      let carts.splice(let products.indexOf(product), 1);
   //      getTotals();
   //   };
   let removeCart = function (index) {
      carts.splice(index, 1);
      getTotals();
      getLength();
   };
   return {
    carts = [],
        addToCart:addToCart,
        removeCart:removeCart,
        total:total,
   };
});
