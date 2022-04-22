function infoGame() {
    location.assign("./html/info.html")
}

function charSelect() {
    location.assign("../html/character.html")
}

function backIndex () {
    location.assign('../index.html')
}


function respostaCerta(certa, errada, gameOver, msgCerta, msgErrada, gOverMsg, proxFase, resultado) {
    while(true){
    let opcao = prompt("Qual a sua alternativa?")
    if (opcao === certa) {
        alert(msgCerta);
        location.href = proxFase;
        break;
    } else if (opcao === errada) {
    alert(msgErrada);
    } else if (opcao === gameOver) {
        alert(gOverMsg);
        location.href = resultado;
        break;    
    } else {
        alert ("Digite uma opção válida!!!")
    }
    }
}   