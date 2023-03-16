import fetchData from "../modules/api.js";
import { renderProfile } from "../modules/render.js";
import { onRouteChanged } from "../modules/router.js";
import { errorState } from "../modules/error.js";
import { loadingState } from "../modules/loading.js";

// variables
const deNav = document.querySelector("nav");
const menuKnop = document.querySelector("header nav>a");

loadingState();

fetchData()
  .then((data) => {
    renderProfile(data);
    console.log(data);

    window.addEventListener("hashchange", (e) => {
      onRouteChanged(data);
    });
  })
  .catch((error) => {
    errorState();
  });

// eventlisteners
menuKnop.addEventListener(
  "click",
  function () {
    deNav.classList.toggle("open");
  },
  false
);
