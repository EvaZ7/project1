const main = document.querySelector("main");

export function renderRepositoryNames(data) {
    main.insertAdjacentHTML("beforeend", `<ul></ul>`);
    let reposList = document.querySelector("main ul");
    data.forEach((repository) => {
        console.log(repository.name);
        let oneRepositoryname = repository.name;
        let oneDescription = repository.description;
        // let cloneUrl = repository.clone_url
        let oneHomepage = repository.homepage
        let oneLicense;

        if (repository.license == null) {
          oneLicense = "No license";
        } else {
          oneLicense = repository.license.name;
        }
        
        reposList.insertAdjacentHTML("beforeend", `<li> <h2>${oneRepositoryname}</h2> <p>${oneDescription}</p> <p>${oneLicense}</p> <button>Clone</button> <a href="${oneHomepage}">Homepage</a> </li>`);
      });
}

export function copyText() {
  data.forEach((repository) => {
    let cloneUrl = repository.clone_url
    navigator.clipboard.writeText(cloneUrl);
  });
}