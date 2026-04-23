let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificarNumero() {
  let intento = document.getElementById("inputNumero").value;
  let mensaje = document.getElementById("mensaje");

  intento = Number(intento);

  if (intento === numeroSecreto) {
    mensaje.textContent = "🎉 ¡ADIVINASTE!";
  } else if (intento < numeroSecreto) {
    mensaje.textContent = "📉 El número es mayor";
  } else {
    mensaje.textContent = "📈 El número es menor";
  }
}

function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  document.getElementById("mensaje").textContent = "";
  document.getElementById("inputNumero").value = "";
}
