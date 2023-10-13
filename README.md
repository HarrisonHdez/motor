# Motor de Decision de Credito

Este codigo en JavaScript calcula montos de credito y recomendaciones optimas basados en el tipo de nomina, fecha de primer empleo y genero del cliente.

## Uso

Llama a calculoMotor con tipoNomina, fechaPrimerEmpleo, y genero como parametros.

## Resultados

- montoMinimo: Monto minimo de credito.
- montoMaximo: Monto maximo de credito.
- recomendacionLinea: Recomendacion optima de linea de credito.

## Ejemplo

```javascript
const resultado = calculoMotor("A", new Date("2022-06-12"), "f");
console.log(resultado);
