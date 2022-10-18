const navbarLinks = document.getElementsByClassName("navbar-links")[0];
document.getElementsByClassName("toggle-button")[0].onclick = function () {
  if (navbarLinks.style.display == "none" || navbarLinks.style.display == "") {
    navbarLinks.style.display = "flex";
  } else {
    navbarLinks.style.display = "none";
  }
};

const switcher = document.querySelector("#theme");
const doc = document.firstElementChild;
switcher.addEventListener("input", (e) => setTheme(e.target.value));
const setTheme = (theme) => doc.setAttribute("color-scheme", theme);
