let slideImages = document.querySelectorAll("img");

var counter = 0;

const autoSliding = () => {
  setInterval(() => {
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
    if (counter >= slideImages.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  }, 3000);
};

autoSliding();
