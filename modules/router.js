import { renderRepositoryNames } from "../modules/render.js";

export function onRouteChanged(data) {
  const hash = window.location.hash;

  console.log(hash);

  switch (hash) {   
    case "#githubportfolio":
      renderRepositoryNames(data);
    break;

  }
}
