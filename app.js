// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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
}
