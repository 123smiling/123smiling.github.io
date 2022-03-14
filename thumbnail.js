document.addEventListener("DOMContentLoaded", function(event) {
  let targetImage = document.querySelector("#smart-image");
  let targetImage = document.querySelector("#smart-image2");
  let targetImage = document.querySelector("#smart-image3");
  let targetImage = document.querySelector("#smart-image4");
  let targetImage = document.querySelector("#smart-image5");
  let targetImage = document.querySelector("#smart-image6");
  let targetImage = document.querySelector("#smart-image7");
  let targetImage = document.querySelector("#smart-image8");
  let targetImage = document.querySelector("#smart-image9");
targetImage.addEventListener("click", function() {
if (targetImage.classList.contains("small")) 
{
  targetImage.classList.remove("small");
} 
  else
{
  targetImage.classList.add("small");
}
});     
});
