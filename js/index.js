const btnMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu-toggle");

const phase01 = document.getElementById("phase-01");
const phase02 = document.getElementById("phase-02");
const phase03 = document.getElementById("phase-03");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

btnMenu.addEventListener("click" ,() =>{
    if(menu.classList.contains("toggle-menu")){
        menu.classList.remove("toggle-menu");
        menu.style.display = "none";
    }else{
        menu.classList.add("toggle-menu");
        menu.style.display = "flex";
    }
});

btn1.addEventListener("click", () =>{
    phase01.style.display = "flex";
    phase02.style.display = "none";
    phase03.style.display = "none";
    btn1.style.padding = "0.2rem";
    btn2.style.padding = "0";
    btn3.style.padding = "0";
});

btn2.addEventListener("click", () =>{
    phase02.style.display = "flex";
    phase01.style.display = "none";
    phase03.style.display = "none";
    btn1.style.padding = "0";
    btn2.style.padding = "0.2rem";
    btn3.style.padding = "0";
});

btn3.addEventListener("click", () =>{
    phase03.style.display = "flex";
    phase01.style.display = "none";
    phase02.style.display = "none";
    btn1.style.padding = "0";
    btn2.style.padding = "0";
    btn3.style.padding = "0.2rem";
});