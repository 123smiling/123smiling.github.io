document.addEventListener("DOMContentLoaded", function(event) {
   
   targetImage.addEventListener("click", function() {
    alert("点击了图片");
});
   targetImage.classList.remove("small");
if (targetImage.classList.contains("small")) {
    targetImage.classList.remove("small");
} else {
  targetImage.classList.add("small");
}
   
});
