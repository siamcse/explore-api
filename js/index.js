function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    const ol = document.getElementById('user-container');
    for(const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.username;
        ol.appendChild(li);
    }
}