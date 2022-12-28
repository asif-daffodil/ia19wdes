const main = document.getElementById("main");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

red.addEventListener("click", () => {
  main.classList.value = "red";
});

green.addEventListener("click", () => {
  main.classList.value = "green";
});

blue.addEventListener("click", () => {
  main.classList.value = "blue";
});

const city = document.getElementsByClassName("city")[0];
console.log(city);
console.log(city.children);
console.log(city.children.length);

for (let i = 0; i < city.children.length; i++) {
  city.children[i].addEventListener("click", () => {
    main.textContent = city.children[i].innerHTML;
  });
}
