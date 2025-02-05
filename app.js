// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo(amigo) {
    amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
    }
}

function actualizarLista(lista, li) {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(indiceAleatorio, amigoSorteado) {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    } else {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = "Tu amigo secreto es: " + amigoSorteado;
    }
}