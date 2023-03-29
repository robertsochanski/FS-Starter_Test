import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Robert Junior';
  greetUser(name);
});
const button = document.querySelector("#newbutton");
button.addEventListener("click", function () {
  const heading = document.querySelector("#Heading-main");
  heading.textContent = "Freaking Fuxcking Awesome ! YEAH Awesome and Legendary!";
});

console.log("im gonna make it");

document.addEventListener("DOMContentLoaded", function () {
  var splides = document.querySelectorAll(".splide");
  splides.forEach(function (splide, index) {
    var perPage = index == 0 ? 5 : 3;
    new Splide(splide, {
      type: "loop",
      perPage: perPage
    }).mount();
  });
});