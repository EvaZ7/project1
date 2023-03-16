import { renderProfile, renderRepositoryNames, renderAboutme } from "../modules/render.js";

const menuItemPortfolio = document.querySelector("nav ul li:first-of-type");
const menuItemOvermij = document.querySelector("nav ul li:nth-of-type(2)");

export function onRouteChanged(data) {
  const hash = window.location.hash;
  // const routerView = document.querySelector("main")

  console.log(hash);

  switch (hash) {   
    case "#githubportfolio":
      menuItemOvermij.classList.remove("overmij");
      menuItemPortfolio.classList.add("portfolio");
      renderRepositoryNames(data);
    break;
    case "#overmij":
      menuItemPortfolio.classList.remove("portfolio");
      menuItemOvermij.classList.add("overmij");
      renderAboutme(data);

    break;
    case "#home":
      menuItemPortfolio.classList.remove("portfolio");
      menuItemOvermij.classList.remove("overmij");
      renderProfile(data);
    break;
  }
}
