export default function fetchData() {

    const url1 = "https://api.github.com/users/EvaZ7/repos";
  
    return fetch(url1).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    });
  }