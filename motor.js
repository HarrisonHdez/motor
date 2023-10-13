/**
 * Calcula el monto minimo, monto maximo y recomendacion de linea segun el tipo de nomina, meses desde el primer empleo y genero.
 * @param {string} tipoNomina - El tipo de nomina (A, B, C o D).
 * @param {Date} fechaPrimerEmpleo - La fecha del primer empleo del empleado.
 * @param {string} genero - El genero del empleado ('m' o 'f').
 * @returns {Object} - Un objeto con monto minimo, monto maximo y recomendacion de linea.
 */

const calculoMotor = (tipoNomina, fechaPrimerEmpleo, genero) => {
  const mesesDesdePrimerEmpleo =
    calcularMesesDesdePrimerEmpleo(fechaPrimerEmpleo);
  const montoMinimo = obtenerMontoMinimo(
    tipoNomina,
    mesesDesdePrimerEmpleo,
    genero
  );
  const montoMaximo = obtenerMontoMaximo(
    tipoNomina,
    mesesDesdePrimerEmpleo,
    genero
  );
  const recomendacionLinea = obtenerRecomendacionLinea(
    montoMinimo,
    montoMaximo
  );

  return { montoMinimo, montoMaximo, recomendacionLinea };
};

/**
 * Calcula los meses transcurridos desde la fecha del primer empleo.
 * @param {Date} fechaPrimerEmpleo - La fecha del primer empleo del empleado.
 * @returns {number} - Numero de meses transcurridos.
 */
const calcularMesesDesdePrimerEmpleo = (fechaPrimerEmpleo) => {
  const diferencia = Date.now() - fechaPrimerEmpleo.getTime();
  const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30));
  return meses;
};


/**
 * Obtiene el monto minimo basado en el tipo de nomina, meses desde el primer empleo y genero.
 * @param {string} tipoNomina - El tipo de nomina (A, B, C o D).
 * @param {number} mesesDesdePrimerEmpleo - Numero de meses desde el primer empleo.
 * @param {string} genero - El genero del empleado ('m' o 'f').
 * @returns {number} - El monto minimo calculado.
 */
const obtenerMontoMinimo = (tipoNomina, mesesDesdePrimerEmpleo, genero) => {
  if (genero === "m") {
    switch (tipoNomina) {
      case "A":
        if (mesesDesdePrimerEmpleo < 26) return 100;
        else if (mesesDesdePrimerEmpleo === 27) return 400;
        else if (mesesDesdePrimerEmpleo === 28) return 900;
        else if (mesesDesdePrimerEmpleo === 29) return 100;
        else return 600;
      case "B":
        if (mesesDesdePrimerEmpleo < 26) return 1000;
        else if (mesesDesdePrimerEmpleo === 27) return 600;
        else return 1000;
      case "C":
        if (mesesDesdePrimerEmpleo < 26) return 400;
        else if (mesesDesdePrimerEmpleo === 27) return 200;
        else if (mesesDesdePrimerEmpleo === 28) return 200;
        else if (mesesDesdePrimerEmpleo === 29) return 1000;
        else return 600;
      case "D":
        if (mesesDesdePrimerEmpleo < 26) return 400;
        else if (mesesDesdePrimerEmpleo === 27) return 300;
        else if (mesesDesdePrimerEmpleo === 28) return 500;
        else if (mesesDesdePrimerEmpleo === 29) return 900;
        else return 1000;
      default:
        return 0;
    }
  } else if (genero === "f") {
    switch (tipoNomina) {
      case "A":
        if (mesesDesdePrimerEmpleo < 24) return 800;
        else if (mesesDesdePrimerEmpleo === 25) return 800;
        else if (mesesDesdePrimerEmpleo === 26) return 800;
        else if (mesesDesdePrimerEmpleo === 27) return 600;
        else return 200;
      case "B":
        if (mesesDesdePrimerEmpleo < 24) return 800;
        else if (mesesDesdePrimerEmpleo === 25) return 700;
        else if (mesesDesdePrimerEmpleo === 26) return 900;
        else if (mesesDesdePrimerEmpleo === 27) return 100;
        else return 700;
      case "C":
        if (mesesDesdePrimerEmpleo < 24) return 200;
        else if (mesesDesdePrimerEmpleo === 25) return 900;
        else if (mesesDesdePrimerEmpleo === 26) return 700;
        else if (mesesDesdePrimerEmpleo === 27) return 800;
        else return 100;
      case "D":
        if (mesesDesdePrimerEmpleo < 24) return 500;
        else if (mesesDesdePrimerEmpleo === 25) return 1000;
        else if (mesesDesdePrimerEmpleo === 26) return 600;
        else if (mesesDesdePrimerEmpleo === 27) return 400;
        else return 700;
      default:
        return 0;
    }
  }
};



/**
 * Obtiene el monto maximo basado en el tipo de nomina, meses desde el primer empleo y genero.
 * @param {string} tipoNomina - El tipo de nomina (A, B, C o D).
 * @param {number} mesesDesdePrimerEmpleo - Numero de meses desde el primer empleo.
 * @param {string} genero - El genero del empleado ('m' o 'f').
 * @returns {number} - El monto maximo calculado.
 */
const obtenerMontoMaximo = (tipoNomina, mesesDesdePrimerEmpleo, genero) => {
  if (genero === "m") {
    switch (tipoNomina) {
      case "A":
        if (mesesDesdePrimerEmpleo < 26) return 4900;
        else if (mesesDesdePrimerEmpleo === 27) return 4700;
        else if (mesesDesdePrimerEmpleo === 28) return 4600;
        else if (mesesDesdePrimerEmpleo === 29) return 4600;
        else return 4500;
      case "B":
        if (mesesDesdePrimerEmpleo < 26) return 4700;
        else if (mesesDesdePrimerEmpleo === 27) return 4400;
        else if (mesesDesdePrimerEmpleo === 28) return 5000;
        else if (mesesDesdePrimerEmpleo === 29) return 4400;
        else return 4900;
      case "C":
        if (mesesDesdePrimerEmpleo < 26) return 5000;
        else if (mesesDesdePrimerEmpleo === 27) return 4700;
        else if (mesesDesdePrimerEmpleo === 28) return 5000;
        else if (mesesDesdePrimerEmpleo === 29) return 4200;
        else return 4600;
      case "D":
        if (mesesDesdePrimerEmpleo < 26) return 4400;
        else if (mesesDesdePrimerEmpleo === 27) return 4700;
        else if (mesesDesdePrimerEmpleo === 28) return 4300;
        else if (mesesDesdePrimerEmpleo === 29) return 4900;
        else return 4300;
      default:
        return 0;
    }
  } else if (genero === "f") {
    switch (tipoNomina) {
      case "A":
        if (mesesDesdePrimerEmpleo < 24) return 4000;
        else if (mesesDesdePrimerEmpleo === 25) return 4200;
        else if (mesesDesdePrimerEmpleo === 26) return 4100;
        else if (mesesDesdePrimerEmpleo === 27) return 4200;
        else return 4500;
      case "B":
        if (mesesDesdePrimerEmpleo < 24) return 4700;
        else if (mesesDesdePrimerEmpleo === 25) return 4200;
        else if (mesesDesdePrimerEmpleo === 26) return 4500;
        else if (mesesDesdePrimerEmpleo === 27) return 4300;
        else return 4400;
      case "C":
        if (mesesDesdePrimerEmpleo < 24) return 4600;
        else if (mesesDesdePrimerEmpleo === 25) return 4900;
        else if (mesesDesdePrimerEmpleo === 26) return 4600;
        else if (mesesDesdePrimerEmpleo === 27) return 4700;
        else return 4000;
      case "D":
        if (mesesDesdePrimerEmpleo < 24) return 5000;
        else if (mesesDesdePrimerEmpleo === 25) return 4900;
        else if (mesesDesdePrimerEmpleo === 26) return 4700;
        else if (mesesDesdePrimerEmpleo === 27) return 5000;
        else return 4300;
      default:
        return 0;
    }
  }
};


/**
 * Calcula la recomendacion de linea basada en los montos minimo y maximo.
 * @param {number} montoMinimo - El monto minimo calculado.
 * @param {number} montoMaximo - El monto maximo calculado.
 * @returns {number} - La recomendacion de linea calculada.
 */
const obtenerRecomendacionLinea = (montoMinimo, montoMaximo) => {
  const p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo);
  const p2 = montoMinimo + 0.0175 * (montoMaximo - montoMinimo);
  return Math.max(p1, p2);
};

const resultado1 = calculoMotor("A", new Date("2022-06-12"), "f");
const resultado2 = calculoMotor("B", new Date("1993-12-30"), "f");
const resultado3 = calculoMotor("C", new Date("2020-09-19"), "m");
const resultado4 = calculoMotor("D", new Date("2019-01-15"), "m");

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);