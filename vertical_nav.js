const navbar = document.querySelector(".side-menu").querySelectorAll("li");
const content = document.querySelectorAll(".content");
const title = document.querySelector("#header-text");
console.log(title);
// console.log(content);

navbar.forEach((element, index) => {
   element.addEventListener("click", function () {
      navbar.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
      title.innerHTML = this.firstElementChild.innerHTML;
      // console.log(this.firstElementChild.innerHTML);
      content.forEach((element) => {
         if (!element.classList.contains("hide")) {
            element.classList.add("hide");
         }
      });
      content[index].classList.remove("hide");
   });
});
