const expandIcon = document.querySelector('#expandIcon');
const collapseIcon = document.querySelector('#collapseIcon');
const imageHolder = document.querySelector('#imageHolder');

expandIcon.addEventListener('click', expandContainer);
collapseIcon.addEventListener('click', collapseContainer);

function expandContainer(event) {
    imageHolder.classList.remove("container-collapsed");
    imageHolder.classList.add("container-expanded");
    document.documentElement.style.overflow = "hidden";  
}

function collapseContainer(event) {
    imageHolder.classList.remove("container-expanded");
    imageHolder.classList.add("container-collapsed");
    document.documentElement.style.overflow = "";
}