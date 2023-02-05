const btnMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu-toggle");

btnMenu.addEventListener("click" ,() =>{
    if(menu.classList.contains("toggle-menu")){
        menu.classList.remove("toggle-menu");
        menu.style.display = "none";
    }else{
        menu.classList.add("toggle-menu");
        menu.style.display = "flex";
    }
});