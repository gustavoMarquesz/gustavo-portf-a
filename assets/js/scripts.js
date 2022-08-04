const writeProjects = document.getElementById('writeProjects');
const botaoDark = document.getElementById('botao-dark');
const body = document.getElementsByTagName('body')[0];
const showButton = document.getElementById('show-btn')
const hideButton = document.getElementById('hide-btn')
const darkModeClass = 'dark-mode';


botaoDark.addEventListener('click', changeBody);
showButton.addEventListener('click', showText);
hideButton.addEventListener('click', hideText);

function hideText(){
    if(writeProjects.style.display === "flex"){
        writeProjects.style.display = "none"
    }
}

function showText(){
    writeProjects.style.display = "none";
    
    if (writeProjects.style.display === "none"){
        writeProjects.style.display = "flex";
        writeProjects.style.flexDirection = "column";
    }
}

function changeBody() {
    body.classList.toggle(darkModeClass);
}

/*function changeButton(){
    const darkMode = "dark-mode";
    const purpleMode = "puple-mode";

    if(body.classList.contains(darkModeClass)){
        botaoDark.innerHTML = purpleMode; 
    }
    else{
        botaoDark.innerHTML = darkMode;
    }
     está função serve para alterar o texto, caso o botão do dark mode sejam diferentes, mas como só uso uma imagem, não precisa*/