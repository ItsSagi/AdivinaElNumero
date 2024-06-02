let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 10;

function adivinar() {
    let guessInput = document.getElementById("guessInput");
    let intentoUsuario = parseInt(guessInput.value);
    let chatBox = document.getElementById("chat-box");

    if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
        agregarMensaje("Por favor, ingresa un número válido entre 1 y 100.", "system-message");
        return;
    }

    agregarMensaje("Tú: " + intentoUsuario, "user-message");

    let mensaje = "";

    if (intentos > 1) {
        if (intentoUsuario === numeroSecreto) {
            mensaje = "¡Felicidades! ¡Estás en tu prime!";
            intentos = 0; // Para terminar el juego
        } else if (intentoUsuario < numeroSecreto) {
            mensaje = "El número secreto es mayor.";
        } else {
            mensaje = "El número secreto es menor.";
        }
        intentos--;
    } else {
        mensaje = "Lo siento, no lograste adivinar el número. Estás perdiendo tu prime. El número secreto era: " + numeroSecreto;
        intentos = 0;
    }

    agregarMensaje(mensaje, "system-message");
    chatBox.scrollTop = chatBox.scrollHeight;
    guessInput.value = "";

    if (intentos === 0) {
        guessInput.disabled = true;
    }
}

function agregarMensaje(texto, clase) {
    let chatBox = document.getElementById("chat-box");
    let mensaje = document.createElement("div");
    mensaje.className = "message " + clase;
    mensaje.innerText = texto;
    chatBox.appendChild(mensaje);
}
