// count
let count = 0;

// Home Page Only
document.querySelector(".nav-div").addEventListener("mouseover", () => {
  count = count + 1;
  document.querySelector(
    ".stats"
  ).innerText = `Hey you flew over the nav links like ${count} times 🚦️`;
});
