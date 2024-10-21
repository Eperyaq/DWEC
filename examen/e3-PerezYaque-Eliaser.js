function agregarOEliminarElemento(lista, elemento) {
    // Validar que el elemento es una cadena y no está vacía
    if (typeof elemento !== 'string' || elemento.trim() == '') {
        alert('Por favor, introduce un nombre de elemento válido.');
        return;
    }

    elemento = elemento.trim().toLowerCase();

    // Comprobamos si el elemento existe
    let existe = false;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].toLowerCase() == elemento) {
            existe = true;
            
            lista.splice(i, 1);// Si el elemento existe lo elimina
            
            console.log(`${elemento} eliminado de la lista.`);
            break;
        }
    }

    // Si el elemento no existe, agregarlo a la lista
    if (!existe) {
        lista.push(elemento);
        console.log(`${elemento} agregado a la lista.`);
    }

    // Muestra la lista
    console.log('Lista de compras actualizada:', lista);
}

// Posibles ejemplos
let listaDeCompras = [];
agregarOEliminarElemento(listaDeCompras, 'Leche');

agregarOEliminarElemento(listaDeCompras, 'Leche');

agregarOEliminarElemento(listaDeCompras, 'Pan');

agregarOEliminarElemento(listaDeCompras, 'Peras');

agregarOEliminarElemento(listaDeCompras, '');
