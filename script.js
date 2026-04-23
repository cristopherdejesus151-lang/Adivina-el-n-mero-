let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function comprobarNumero(){

    let numeroUsuario = document.getElementById("numeroUsuario").value;
    let mensaje = document.getElementById("mensaje");

    if(numeroUsuario == numeroSecreto){
        mensaje.textContent = "¡ADIVINASTE!";
    }

    else if(numeroUsuario > numeroSecreto){
        mensaje.textContent = "El número es menor";
    }

    else{
        mensaje.textContent = "El número es mayor";
    }

}

function reiniciarJuego(){
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    document.getElementById("mensaje").textContent = "";
    document.getElementById("numeroUsuario").value = "";
}
