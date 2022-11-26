const Two = document.getElementById('Two');
const Three = document.getElementById('Three');
const Ford = document.getElementById('Ford');
const verificar = document.getElementById('Verificar');
const puntos = document.getElementById('puntajeTu');
const reset = document.getElementById('inp');
var puntaje = 0;
var num = 0;

    num = Math.floor(Math.random() * 4 + 1);

function averiguarNumero() {
    Two.style.display = 'none';
    Three.style.display = 'none';
    Ford.style.display = 'none';

    var respuesta = document.getElementById('inp').value;
    if(respuesta == num) {
        Ford.style.display = 'block';
        puntaje++;
        num = Math.floor(Math.random() * 4 + 1);
        borrarRespuesta();
    } else if(respuesta > num) {
        Two.style.display = 'block';
    } else if(respuesta < num) {
        Three.style.display = 'block';
    }

    puntos.innerHTML = puntaje;
}

function borrarRespuesta() {
    reset.value = '';
}