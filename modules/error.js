const main = document.querySelector("main");

export function errorState() {
  main.insertAdjacentHTML(
    "beforeend",
    `<h2 id="error">Welll this is akward... this should be working</h2>`
  );
}
