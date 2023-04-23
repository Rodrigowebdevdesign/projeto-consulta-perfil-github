async function user(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`);
    return await response.json();
};
function getUserProfile(userName){
    user(userName).then(userData =>{
        let userInfo = `<img src="${userData.avatar_url}" alt="foto do perfil do usuário"
                        <div class="data">
                            <h1>${userData.name ?? 'Usuário não possui um nome cadastrado 😢'}</h1>
                            <p>${userData.bio ?? 'Usuário não possui uma biografia cadastrada 😢'}</p>
                        </div> `

            document.querySelector('.profile-data').innerHTML = userInfo;
    });
};
<<<<<<< HEAD
getUserProfile('rodrigowebdev-design')
=======
getUserProfile('cadudias')
>>>>>>> be69e0fa11f448ff57549a915466c0e91c2b96b4
