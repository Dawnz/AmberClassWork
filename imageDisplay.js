const imageInput = document.querySelector("#image_input");
const displayImage = document.querySelector("#display_image");
let uploadedImage = "";

imageInput.addEventListener("change", function () {
   const reader = new FileReader();
   reader.addEventListener("load", () => {
      uploadedImage = reader.result;
      displayImage.style.backgroundImage = `url(${uploadedImage})`;
   });
   reader.readAsDataURL(this.files[0]);
});
