var clickMe = document.querySelector("button");
function change(){
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`;
}
clickMe.addEventListener('click', change);
