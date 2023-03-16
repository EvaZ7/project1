const main = document.querySelector("main");

export function renderRepositoryNames(data) {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  main.insertAdjacentHTML("beforeend", `<ul></ul>`);
  let reposList = document.querySelector("main ul");
  data.forEach((repository) => {
    console.log(repository.name);
    let oneRepositoryname = repository.name;
    let oneDescription = repository.description;
    // let cloneUrl = repository.clone_url
    let oneHomepage = repository.homepage;
    let oneLicense;

    if (repository.license == null) {
      oneLicense = "No license";
    } else {
      oneLicense = repository.license.name;
    }

    reposList.insertAdjacentHTML(
      "beforeend",
      `<li> <h2>${oneRepositoryname}</h2> <p>${oneDescription}</p> <p>${oneLicense}</p> <button>Clone</button> <a href="${oneHomepage}">Homepage</a> </li>`
    );
  });
}

export function renderProfile(data) {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  let avatar = data[0].owner.avatar_url;
  let profileLink = data[0].owner.html_url;
  let username = data[2].name;
  let bio =
    "Hoi ik ben Eva Zaadnoordijk 3e-jaars student Communicatie en Multimedia Design bij de HvA. Ik volg momenteel de minor Web design en development, daarbij komt een hoop code kijken die op Github staat. Deze repositories kan je nu terug vinden op mijn portfolio website.";

  main.insertAdjacentHTML(
    "beforeend",
    `<section><img src="${avatar}"> <h2>${username}</h2> <p>${bio}</p> <a href="${profileLink}">GitHub profile</a> 
    <a href="https://66c04f25-ca75-4937-90c4-60a939ad1adb.filesusr.com/ugd/daebed_68d88ee8e12449ca9cfa3a0795469d49.pdf">CV</a>
    <button><spline-viewer url="https://prod.spline.design/n8nyfhzHHJMQV8lV/scene.splinecode"></spline-viewer></button> <p></p>
    </section>`
  );
  let likeKnop = document.querySelector("section button");
  let displayLikes = document.querySelector("section p:last-of-type");
  let count = 0;
  displayLikes.innerHTML = count + " likes";

  likeKnop.addEventListener(
    "click",
    function () {
      count += 1;
      displayLikes.innerHTML = count + " likes";
      displayLikes.classList.add("liked");
    },
    false
  );
}

export function renderAboutme(data) {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  let avatar = data[0].owner.avatar_url;
  main.insertAdjacentHTML(
    "beforeend",
    `<img src="./images/me.JPG"> 
    <p>Ik ben Eva zoals je al hebt gelezen, 
    maar naast repositories maken doe ik nog veel meer. Ik ben heb namelijk voor deze minor ook 
    een minor Visual interface Design gevolgd. Alle projecten hiervan kan je terugvinden op mijn andere
    portfolio website, dus klik maar even op de knop hieronder!
    </p> 
    <a href="https://evazaadnoordijk.wixsite.com/my-site">Website</a>`
  );
}

export function copyText() {
  data.forEach((repository) => {
    let cloneUrl = repository.clone_url;
    navigator.clipboard.writeText(cloneUrl);
  });
}
