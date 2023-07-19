const jugadorUno = {
  nombre: "Marce",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Flor",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
  contadorPuntosJug1++;
} else if (jugadorDos.habilidades.ataque > jugadorUno.habilidades.ataque) {
  contadorPuntosJug2++;
} else contadorPuntosJug1++, contadorPuntosJug2++;
if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
  contadorPuntosJug1++;
} else if (
  jugadorDos.habilidades.velocidad > jugadorUno.habilidades.velocidad
) {
  contadorPuntosJug2++;
} else contadorPuntosJug1++, contadorPuntosJug2++;
if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {
  contadorPuntosJug1++;
} else if (jugadorDos.habilidades.vida > jugadorUno.habilidades.vida) {
  contadorPuntosJug2++;
} else contadorPuntosJug1++, contadorPuntosJug2++;

if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
  contadorPuntosJug1++;
} else if (jugadorDos.articulos.length > jugadorUno.habilidades.ataque) {
  contadorPuntosJug2++;
} else contadorPuntosJug1++, contadorPuntosJug2++;

var ganador =
  contadorPuntosJug1 > contadorPuntosJug2
    ? jugadorUno.nombre
    : contadorPuntosJug1 < contadorPuntosJug2
    ? jugadorDos.nombre
    : "empate";

var resultado = {
  [jugadorUno.nombre]: contadorPuntosJug1,
  [jugadorDos.nombre]: contadorPuntosJug2,
  ganador: ganador,
};
console.log(resultado);
