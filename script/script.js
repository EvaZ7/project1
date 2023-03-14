import fetchData from "../modules/api.js";
import {renderRepositoryNames} from "../modules/render.js";
import { onRouteChanged } from "../modules/router.js";

// variables
const deNav = document.querySelector("nav");
const menuKnop = document.querySelector("header nav>a");

fetchData()
  .then((data) => {
    console.log(data)

    window.addEventListener("hashchange", (e) => {
      onRouteChanged(data);
    });
})
.catch((error) => {
    // Handle the error
    // console.log(error);
    // loadingdaily.textContent =
    //   "This should be working... but something's gone wrong";
    // refreshButton.src = "images/warning.png";
    // authorQuote.textContent = "Quote not found...";
});

// eventlisteners
menuKnop.addEventListener(
  "click",
  function () {
    deNav.classList.toggle("open");
  },
  false
);