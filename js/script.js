// URL de GitHub Api //
const gitHubApi = 'https://api.github.com/users/jeanToru';

function doomCreate(info) {
  const list = document.querySelector('.list');
  const content = `
  <li>Name: <a href="https://github.com/jeanToru" target="_black" class= "linkApi">${info.name}</a></li>
  <li>Follower: ${info.followers}</li>
  <li>Following: ${info.following}</li>
  <li>Repositories: ${info.public_repos}</li>
  <li>Twitter: <a href="https://twitter.com/JeanBro92338197" target="_black" class= "linkApi">${info.twitter_username}</a></li>
  `;
  list.innerHTML = content;
}

function createInfo() {
  fetch(gitHubApi)
    .then((response) => response.json())
    .then((data) => {
      doomCreate(data);
    });
}

createInfo();
