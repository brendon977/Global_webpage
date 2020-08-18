
// Para manter a tela smepre do mesmo tamanho
// clientHeight serve para pegar a altura do elemento

document.addEventListener('DOMContentLoaded', function(event){
    const headerSize= document.getElementById('header').clientHeight;
    document.getElementById('container-background').style.height = (window.innerHeight - headerSize) + "px";
})