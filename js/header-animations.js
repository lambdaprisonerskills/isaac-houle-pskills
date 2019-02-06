let logo = document.querySelector("nav .logo");
let bars = document.querySelector("nav .menu-button");
let headerContent = document.querySelector(".header-content");

let timeIncrement = 0;

function headerContentFadeIn() {
  TweenMax.fromTo(
    headerContent,
    0.8,
    { opacity: 0, left: "-1rem" },
    { opacity: 1, left: 0 }
  );
}
function navItemsFadeIn() {
  TweenMax.fromTo(logo, 0.8, { opacity: 0 }, { opacity: 1, delay: 0.8 });
  TweenMax.fromTo(bars, 0.8, { opacity: 0 }, { opacity: 1, delay: 0.8 });
}

headerContentFadeIn();
navItemsFadeIn();
