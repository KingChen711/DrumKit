const drums = document.querySelectorAll(".drum");
const drumsSound = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];
const keys = {
  w: `tom-1`,
  a: `tom-2`,
  s: `tom-3`,
  d: `tom-4`,
  j: `snare`,
  k: `crash`,
  l: `kick-bass`
}


function makeSound(drum) {
  let audio = new Audio("sounds/" + drum + ".mp3");
  audio.play();
}


function makeAnimation(drum) {
  let activeButton = document.querySelector("." + drum);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}


for (let i = 0; i <= 6; ++i) {
  drums[i].addEventListener("click", () => {
    makeSound(drumsSound[i]);
    makeAnimation(drums[i].innerHTML);
  });
}


document.addEventListener("keypress", (event) => {
  makeSound(keys[event.key]);
  makeAnimation(event.key);
})



