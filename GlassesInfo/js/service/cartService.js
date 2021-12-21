// app.factory("CartService", function () {
//       let scarts = [];
//       let stotal = 0;
//       let scount = 0;
//    let getLength = function () {
//       scount = carts.length;
//       console.log(count);
//    };
//    //   $http.get("/GlassesInfo/js/service/products.json").then(function (res) {
//    //      // console.log(data);
//    //      let products = res.data;
//    //   });
//    let addToCart = function (product) {
//       if (product) {
//          scarts.push({
//             itemName: product.name,
//             itemPrice: product.price,
//             itemImg: product.cover,
//          });
//       }
//       //  console.log(let carts.length);
//       getLength();
//    };
//    let getTotals = function () {
//       let initialVal = 0;
//       let total = scarts.reduce((x, y) => x + y["itemPrice"], initialVal);
//    };

//    //   let removeCart = function (product) {
//    //      let carts.splice(let products.indexOf(product), 1);
//    //      getTotals();
//    //   };
//    let removeCart = function (index) {
//       scarts.splice(index, 1);
//       getTotals();
//       getLength();
//    };
//    return {
//     scarts = [],
//         addToCart:addToCart,
//         removeCart:removeCart,
//         total:total,
//    };
// });
