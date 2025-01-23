
let lista = [];


function agregarAmigo() {
    let cajaAmigo = document.getElementById('amigo').value;
    console.log(cajaAmigo);

    if (cajaAmigo == '') {
        alert('El espacio no puede quedar vacío.')
    } else if (lista.includes(cajaAmigo)) {
        alert('Este nombre ya está en la lista.');
    } else {
        lista.push(cajaAmigo);

        let listadoHTML = document.getElementById('listaAmigos');
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = cajaAmigo;
        listadoHTML.appendChild(nuevoElemento);

        document.getElementById('amigo').value = '';
        console.log(lista);

    }
}

function sortearAmigo() {
    let numeroMaximo = lista.length;
    console.log(numeroMaximo);
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    if (lista == '') {
        alert('Sin lista de amigos no se puede hacer sorteo.')
    } else {
        let listadoHTML = document.getElementById('resultado');
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = lista[numeroGenerado];
        listadoHTML.appendChild(nuevoElemento);

    }

}

function detectarEnter(event) {
    if (event.key === 'Enter') { 
        agregarAmigo(); 
    }
}
