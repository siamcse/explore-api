function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(data){
    const div = document.getElementById('posts-container');
    for(const post of data){
        const divPost = document.createElement('div');
        divPost.classList.add('post')
        divPost.innerHTML = `
            <h2>Post No: ${post.id}</h2>
            <h4>User: ${post.userId}</h4>
            <h3>Title: ${post.title}</h3>
            <p>Description: ${post.body}</p>
        `;
        div.appendChild(divPost);
    }
}
loadPosts();

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);