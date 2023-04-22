function calcular() {
    // Obtenemos los valores de los campos de entrada
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const apalancamiento = parseFloat(document.getElementById('apalancamiento').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);

    const long1 = 1.02;
    const long2 = 1.02;
    const long3 = 1.02;
    const long4 = 1.03;
    const long5 = 1.03;
    const long6 = 1.03;
    const long7 = 1.04;
    const longSL = 1.01;
  
    // Calculamos la cantidad de monedas con el porcentaje
    const cantidadConPorcentaje = cantidad + (porcentaje / 100) * cantidad;
  
    // Calculamos el resultado del precio de entrada
    const resultadoPrecio = precio * 1.02;
  
    // Realizamos el cálculo principal
    const resultado = precio * cantidad / apalancamiento;
  
    // Realizamos la Interacción 1
    const precioInteraccion1 = precio / long1;
    const monedaInteraccion1 = cantidad + (cantidad * porcentaje / 100);
    const resultadoInteraccion1 = precioInteraccion1 * monedaInteraccion1;
  
    // Realizamos la Interacción 2
    const precioInteraccion2 = precioInteraccion1/ long2;
    const monedaInteraccion2 = monedaInteraccion1 + (monedaInteraccion1 * porcentaje / 100);
    const resultadoInteraccion2 = precioInteraccion2 * monedaInteraccion2;
  
     // Realizamos la Interacción 3
     const precioInteraccion3 = precioInteraccion2 / long3;
     const monedaInteraccion3 = monedaInteraccion2 + (monedaInteraccion2 * porcentaje / 100);
     const resultadoInteraccion3 = precioInteraccion3 * monedaInteraccion3;
  
     
     // Realizamos la Interacción 4
     const precioInteraccion4 = precioInteraccion3 / long4;
     const monedaInteraccion4 = monedaInteraccion3 + (monedaInteraccion3 * porcentaje / 100);
     const resultadoInteraccion4 = precioInteraccion4 * monedaInteraccion4;
  
     // Realizamos la Interacción 5
     const precioInteraccion5 = precioInteraccion4 / long5;
     const monedaInteraccion5 = monedaInteraccion4 + (monedaInteraccion4 * porcentaje / 100);
     const resultadoInteraccion5 = precioInteraccion5 * monedaInteraccion5;
  
     // Realizamos la Interacción 6
     const precioInteraccion6 = precioInteraccion5 / long6;
     const monedaInteraccion6 = monedaInteraccion5 + (monedaInteraccion5 * porcentaje / 100);
     const resultadoInteraccion6 = precioInteraccion6 * monedaInteraccion6;
  
     // Realizamos la Interacción 7
     const precioInteraccion7 = precioInteraccion6 / long7;
     const monedaInteraccion7 = monedaInteraccion6 + (monedaInteraccion6 * porcentaje / 100);
     const resultadoInteraccion7 = precioInteraccion7 * monedaInteraccion7;
  
     // Calcular los valores solicitados
  const precioStockOut = precioInteraccion7 / longSL;
  const monedasStockOut = monedaInteraccion1 + monedaInteraccion2 + monedaInteraccion3 + monedaInteraccion4 + monedaInteraccion5 + monedaInteraccion6 + monedaInteraccion7 + cantidad;
  const usdtStockOut = precioStockOut * monedasStockOut;
  const gananciaUSDT = usdtStockOut / apalancamiento;
  
  
    // Agregamos una fila a la tabla con los resultados de la Interacción 1
    const tablaInteraccion1 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion1 = tablaInteraccion1.insertRow();
    const celda1Interaccion1 = filaInteraccion1.insertCell();
    const celda2Interaccion1 = filaInteraccion1.insertCell();
    const celda3Interaccion1 = filaInteraccion1.insertCell();
    celda1Interaccion1.appendChild(document.createTextNode(`$${precioInteraccion1.toFixed(5)}`));
    celda2Interaccion1.appendChild(document.createTextNode(`${monedaInteraccion1}`));
    celda3Interaccion1.appendChild(document.createTextNode(`$${resultadoInteraccion1.toFixed(5)}`));
  
    // Agregamos una fila a la tabla con los resultados de la Interacción 2
    const tablaInteraccion2 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion2 = tablaInteraccion2.insertRow();
    const celda1Interaccion2 = filaInteraccion2.insertCell();
    const celda2Interaccion2 = filaInteraccion2.insertCell();
    const celda3Interaccion2 = filaInteraccion2.insertCell();
    celda1Interaccion2.appendChild(document.createTextNode(`$${precioInteraccion2.toFixed(5)}`));
    celda2Interaccion2.appendChild(document.createTextNode(`${monedaInteraccion2.toFixed(5)}`));
    celda3Interaccion2.appendChild(document.createTextNode(`$${resultadoInteraccion2.toFixed(5)}`));
  
    // Agregamos una fila a la tabla con los resultados de la Interacción 3
    const tablaInteraccion3 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion3 = tablaInteraccion3.insertRow();
    const celda1Interaccion3 = filaInteraccion3.insertCell();
    const celda2Interaccion3 = filaInteraccion3.insertCell();
    const celda3Interaccion3 = filaInteraccion3.insertCell();
    celda1Interaccion3.appendChild(document.createTextNode(`$${precioInteraccion3.toFixed(5)}`));
    celda2Interaccion3.appendChild(document.createTextNode(`${monedaInteraccion3.toFixed(5)}`));
    celda3Interaccion3.appendChild(document.createTextNode(`$${resultadoInteraccion3.toFixed(5)}`));
  
    // Agregamos una fila a la tabla con los resultados de la Interacción 4
    const tablaInteraccion4 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion4 = tablaInteraccion4.insertRow();
    const celda1Interaccion4 = filaInteraccion4.insertCell();
    const celda2Interaccion4 = filaInteraccion4.insertCell();
    const celda3Interaccion4 = filaInteraccion4.insertCell();
    celda1Interaccion4.appendChild(document.createTextNode(`$${precioInteraccion4.toFixed(5)}`));
    celda2Interaccion4.appendChild(document.createTextNode(`${monedaInteraccion4.toFixed(5)}`));
    celda3Interaccion4.appendChild(document.createTextNode(`$${resultadoInteraccion4.toFixed(5)}`));
  
  
    // Agregamos una fila a la tabla con los resultados de la Interacción 5
    const tablaInteraccion5 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion5 = tablaInteraccion5.insertRow();
    const celda1Interaccion5 = filaInteraccion5.insertCell();
    const celda2Interaccion5 = filaInteraccion5.insertCell();
    const celda3Interaccion5 = filaInteraccion5.insertCell();
    celda1Interaccion5.appendChild(document.createTextNode(`$${precioInteraccion5.toFixed(5)}`));
    celda2Interaccion5.appendChild(document.createTextNode(`${monedaInteraccion5.toFixed(5)}`));
    celda3Interaccion5.appendChild(document.createTextNode(`$${resultadoInteraccion5.toFixed(5)}`));
  
  
      // Agregamos una fila a la tabla con los resultados de la Interacción 6
      const tablaInteraccion6 = document.getElementById('resultado-interaccion-1');
      const filaInteraccion6 = tablaInteraccion6.insertRow();
      const celda1Interaccion6 = filaInteraccion6.insertCell();
      const celda2Interaccion6 = filaInteraccion6.insertCell();
      const celda3Interaccion6 = filaInteraccion6.insertCell();
      celda1Interaccion6.appendChild(document.createTextNode(`$${precioInteraccion6.toFixed(5)}`));
      celda2Interaccion6.appendChild(document.createTextNode(`${monedaInteraccion6.toFixed(5)}`));
      celda3Interaccion6.appendChild(document.createTextNode(`$${resultadoInteraccion6.toFixed(5)}`));
  
      
        // Agregamos una fila a la tabla con los resultados de la Interacción 7
    const tablaInteraccion7 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion7 = tablaInteraccion7.insertRow();
    const celda1Interaccion7 = filaInteraccion7.insertCell();
    const celda2Interaccion7 = filaInteraccion7.insertCell();
    const celda3Interaccion7 = filaInteraccion7.insertCell();
    celda1Interaccion7.appendChild(document.createTextNode(`$${precioInteraccion7.toFixed(5)}`));
    celda2Interaccion7.appendChild(document.createTextNode(`${monedaInteraccion7.toFixed(5)}`));
    celda3Interaccion7.appendChild(document.createTextNode(`$${resultadoInteraccion7.toFixed(5)}`));
  
  
  
    // Agregamos una fila a la tabla con los resultados del cálculo principal
    const tablaResultado = document.getElementById('resultado-principal');
    const filaResultado = tablaResultado.insertRow();
    const celda1Resultado = filaResultado.insertCell();
    celda1Resultado.appendChild(document.createTextNode(`USDT =$${resultado.toFixed(5)}`));
  
    // Crear el elemento div
  const stockOutDiv = document.createElement("div");
  
  // Asignar los valores calculados al contenido del div
  stockOutDiv.innerHTML = `
  <div class="container ">
  <h2>SL</h2>
  <div class="row resultado-stockout">
  
  
    <p class="stockout">Precio: <br> $${precioStockOut.toFixed(5)}</p>
      <p class="stockout">Monedas
    <p class="stockout">USDT:<br> $${usdtStockOut.toFixed(5)}</p>
    <p class="stockout">Ganancia:<br> $${gananciaUSDT.toFixed(5)}</p>
  
  </div>
  </div>
  `;
  
  // Agregar el elemento div al final de la página
  const body = document.querySelector("body");
  body.appendChild(stockOutDiv);
  
  }
  

  const porcentajeInput = document.getElementById("porcentaje");
const porcentajeValor = document.getElementById("porcentaje-valor");

porcentajeInput.addEventListener("input", () => {
  porcentajeValor.innerText = porcentajeInput.value;
});
