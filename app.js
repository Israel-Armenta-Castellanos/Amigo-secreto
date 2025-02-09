let amigos = [];  // Lista vacía
console.log(amigos);

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim(); // Eliminar espacios extra
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(amigo);  // Agregar a la lista
    document.getElementById("amigo").value = ""; // Limpiar el campo
    actualizarLista(); // Actualizar la lista en pantalla
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `🎉 Tu amigo secreto es: ${amigoSorteado}`;
    setTimeout(reiniciarJuego, 7000); // llama a la funcion "reiniciarJuego" después de 7 segundos una vez que se haya sorteado el amigo secreto
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    alert("El juego se ha reiniciado.");
}
