document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.querySelector('#input-search').value
    getUserProfile(userName);
    
});
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isKeyPressed = key === 13;
    if (isKeyPressed) {
        getUserProfile(userName);
    
    }
});
async function user(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    return await response.json();
};
async function repos(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`);
    return await response.json();
};
function getUserProfile(userName) {


    user(userName).then(userData => {
        let userInfo = `<div class="info">
                            <img src="${userData.avatar_url}" alt="foto do perfil do usuário"
                            
                            <div class="data">
                                <h1>${userData.name ?? 'Usuário não possui um nome cadastrado 😢'}</h1>
                                <p>${userData.bio ?? 'Usuário não possui uma biografia cadastrada 😢'}</p>
                            </div>
                        </div>
                         `
        document.querySelector('.profile-data').innerHTML = userInfo;

        getUserRepos(userName)
    });
};

function getUserRepos(userName) {
    repos(userName).then(reposData => {
        let repositoriesItens = "";

        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blanc">${repo.name}</a></li>`
        });
        document.querySelector('.profile-data').innerHTML += `
                                                <div class="repositories section">
                                                    <h2>Repositórios</h2>
                                                    <ul>${repositoriesItens}</ul>
                                                </div>`
    });

}
