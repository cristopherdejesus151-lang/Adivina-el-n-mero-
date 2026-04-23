let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificar() {
    let numero = document.getElementById("numeroUsuario").value;
    let mensaje = document.getElementById("mensaje");

    numero = Number(numero);

    if (!numero) {
        mensaje.textContent = "⚠️ Escribe un número";
        return;
    }

    if (numero === numeroSecreto) {
        mensaje.textContent = "🎉 ¡ADIVINASTE!";
    } else if (numero < numeroSecreto) {
        mensaje.textContent = "🔼 El número es mayor";
    } else {
        mensaje.textContent = "🔽 El número es menor";
    }
}

function reiniciar() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    document.getElementById("mensaje").textContent = "";
    document.getElementById("numeroUsuario").value = "";
}
