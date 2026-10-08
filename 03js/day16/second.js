const container = document.getElementById('container');
container.addEventListener('click', (e) => {
    console.log(e.target);
    const children = e.target;
    const body = document.querySelector('body');
    body.style.backgroundColor = children.id;
});