# Motor de Decisión de Crédito

Este código en JavaScript calcula montos de crédito y recomendaciones óptimas basados en el tipo de nómina, fecha de primer empleo y género del cliente.

## Uso

Llama a `calculoMotor` con `tipoNomina`, `fechaPrimerEmpleo`, y `genero` como parámetros.

## Resultados

- `montoMinimo`: Monto mínimo de crédito.
- `montoMaximo`: Monto máximo de crédito.
- `recomendacionLinea`: Recomendación óptima de línea de crédito.

## Ejemplo

```javascript
const resultado = calculoMotor("A", new Date("2022-06-12"), "f");
console.log(resultado);
