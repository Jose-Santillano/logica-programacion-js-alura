// Descripción
/* 
    Ejercicio: Cambios para hacer que no sea entre 1 y 10. Que pueda ser entre 1 y 100, o entre 1 y 1000. Que el usuario pueda elegir el numero maximo.

    * Ideas a implementar *
    - Que el usuario pueda elegir el numero maximo. LISTO
    - Que el usuario pueda elegir la cantidad de intentos. (facil: 10, medio:   5, dificil: 3, imposible: 1) LISTO
*/

// Variables globales y constantes
let numeroMaximoPosible;
let numeroSecreto;
let numeroUsuario;
let intentos = 0;
let maximosIntentos;

// Función que genera el numero aleatorio
const numeroAleatorio = (maximo) => {
  return Math.floor(Math.random() * maximo) + 1;
};

// Funcion principal
const main = () => {
  alert("¡Bienvenido a Adivina el número V2.0!");

  // Pedimos al usuario que ingrese el número máximo posible.
  numeroMaximoPosible = parseInt(prompt("Ingresa el número máximo posible: "));
  // > Validamos que el número ingresado sea un número.
  if (isNaN(numeroMaximoPosible)) {
    alert(
      "No ingresaste un número, se asignará el número máximo posible por defecto."
    );
    numeroMaximoPosible = 100;
  }

  // Generamos el número secreto.
  numeroSecreto = numeroAleatorio(numeroMaximoPosible);

  // Pedimos al usuario que ingrese la dificultad.
  let dificultad = parseInt(
    prompt("Ingresa la dificultad: facil (1), medio (2), dificil (3), imposible (4)")
  );

  // Asignamos la cantidad de intentos según la dificultad. (si no ingresó una dificultad válida, se asigna la dificultad más dificil)
  switch (dificultad) {
    case 1: {
      maximosIntentos = 10;
      break;
    }
    case 2: {
      maximosIntentos = 5;
      break;
    }
    case 3: {
      maximosIntentos = 3;
      break;
    }
    case 4:{
        maximosIntentos = 1;
        break;
    }
    default: {
      maximosIntentos = 1;
      alert(
        "No ingresaste una dificultad válida, se asignará la dificultad imposible por gracioso."
      );
    }
  }

  // Log de testing.
  //console.log("numeroSecreto: ", numeroSecreto);
  //console.log("numeroMaximoPosible: ", numeroMaximoPosible);
  //console.log("maximosIntentos: ", maximosIntentos);

  while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(
      prompt(
        `Me indicas un número entre 1 y ${numeroMaximoPosible} por favor | Intentos: ${intentos} de ${maximosIntentos}`
      )
    );

    if (numeroUsuario == numeroSecreto) {
      //Acertamos, fue verdadera la condición

      intentos++;

      mostrarResultadoGanador();

      alert(
        `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
          intentos == 1 ? "vez." : "veces."
        }`
      );
    } else {
      if (numeroUsuario > numeroSecreto) {
        alert("El número secreto es menor.");
      } else {
        alert("El número secreto es mayor.");
      }
      intentos++;

      if (intentos >= maximosIntentos) {

        mostrarResultadoPerdedor();

        alert(
          `Llegaste al número máximo de ${maximosIntentos} intentos, el número secreto era: ${numeroSecreto}`
        );
        break;
      }
    }
  }
};

// Funciones avanzadas para cambiar fondos, textos, etc.

const ganador = {
    titulo: "¡Ganaste!",
    subtitulo: "¡Felicidades 🎉, haz adivinado el numero!"
}
const perdedor = {
    titulo: "¡Perdiste!",
    subtitulo: "¡Que triste 😢, no haz adivinado el numero!"
}

// Funcion para mostrar el resultado ganador.
const mostrarResultadoGanador = () => {
    document.getElementById("title").innerHTML = ganador.titulo;
    document.getElementById("description").innerHTML = ganador.subtitulo;
}

// Funcion para mostrar el resultado perdedor.
const mostrarResultadoPerdedor = () => {
    document.getElementById("title").innerHTML = perdedor.titulo;
    document.getElementById("description").innerHTML = perdedor.subtitulo;
}

// *** Ejecución del programa ***
main();
