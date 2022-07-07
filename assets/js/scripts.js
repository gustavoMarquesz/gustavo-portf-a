const botaoDark = document.getElementById('botao-dark');
const body = document.getElementsByTagName('body')[0];
const darkModeClass = 'dark-mode'; 

botaoDark.addEventListener('click', changeMode);

function changeMode(){
    changeBody();
    changeButton();
}

function changeBody() {
    body.classList.toggle(darkModeClass);
  
}

function changeButton(){
    const darkMode = "Dark-Mode";
    const purpleMode = "Purple-Mode";

    if(body.classList.contains(darkModeClass)){
        botaoDark.innerHTML = purpleMode;
        
    }
    else{
        botaoDark.innerHTML = darkMode;
    }
}