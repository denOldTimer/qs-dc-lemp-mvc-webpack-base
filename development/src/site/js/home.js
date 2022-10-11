/*--- HOME PAGE CTA BUTTON SALES TEAM ---*/
// import bgImage from "../../img/widepack-hq.png";

// const image = new Image();
// image.src = bgImage;

// const main = document.getElementById("home");
// main.append(image);

const doc = document.firstElementChild;
const lang = doc.getAttribute("lang");
console.log(lang);
document.getElementById("salesButton").onclick = function () {
  location.href = "/" + lang + "/Sales";
  console.log(lang);
};
