const lista = ['Terragona', 'Barcelona', 'Madrid', 'Sitges', 'Huesca', 'Valencia', 'Malaga'];
const consolidado = [];

const buscador = document.querySelector('#busca');
const opcionesMatch = document.querySelector('#opciones');

buscador.addEventListener('keyup', function(evt){

    checkLetters(evt);
    // const listaFinal = generateListaFinal();
     const listaFinal = lista.filter(lugar => {
        return lugar.includes(consolidado.join(''));
     });

    renderLugares(listaFinal);
    limpiarLista();
})

function checkLetters(evt){
    if(evt.key.length == 1){
        consolidado.push(evt.key);
    }else if (evt.key == 'Backspace'){
        consolidado.pop();
    }
}

// function generateListaFinal(){
//       lista.filter(lugar => {
//         return lugar.includes(consolidado.join(''));
//      });
// }

function renderLugares(listaFinal){
    let lugarValor = '';
    for(let i=0; i<listaFinal.length; i++){
        lugarValor += `<li>${listaFinal[i]}</li>`;
    }
    opcionesMatch.innerHTML = lugarValor;
}

function limpiarLista(){
    if(!buscador.value){
        opcionesMatch.innerHTML = '';
    }
}