const main = document.querySelector("main");

export function loadingState() {
  main.insertAdjacentHTML("beforeend", `<h2 id="loading">loading...</h2>`);
}
