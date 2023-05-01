
    //Constante porcentaje único
    const porcentajeUnico = 0.0300;
    const mostrarPorcentajeUnico = porcentajeUnico * 100;
    document.getElementById("resultadoPorcentajeUnico").innerHTML = mostrarPorcentajeUnico.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4});


const numeroInput = document.getElementById('precio');
numeroInput.addEventListener('blur', () => {
  const numero = parseFloat(numeroInput.value);
  if (!isNaN(numero)) {
    numeroInput.value = numero.toFixed(4);
  }
  
});

const cantidadInput = document.getElementById('cantidad');
cantidadInput.addEventListener('blur', () => {
  const numero = parseFloat(cantidadInput.value);
  if (!isNaN(numero)) {
    cantidadInput.value = numero.toFixed(4);
  }
});

const capitalTotalInput = document.getElementById('capitalTotal');
capitalTotalInput.addEventListener('blur', () => {
  const numero = parseFloat(capitalTotalInput.value);
  if (!isNaN(numero)) {
    capitalTotalInput.value = numero.toFixed(4);
  }
});


function calcular() {

    const tabla1 = document.getElementById("resultado-principal");
  tabla1.innerHTML = "";

  // Borrar contenido de la tabla 2
  const tabla2 = document.getElementById("resultado-interaccion-1");
  tabla2.innerHTML = "";

  const tabla3 = document.getElementById("resultado");
  tabla3.innerHTML = "";



    // Obtenemos los valores de los campos de entrada
    const capitalTotal = parseFloat(document.getElementById('capitalTotal').value);
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const apalancamiento = parseFloat(document.getElementById('apalancamiento').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);
  
    // Calculamos la cantidad de monedas con el porcentaje
    const cantidadConPorcentaje = cantidad + (porcentaje / 100) * cantidad;
  
    // Calculamos el resultado del precio de entrada
    const resultadoPrecio = precio * porcentajeUnico;
  
    // Realizamos el cálculo principal
    const resultado = precio * cantidad / apalancamiento;
  
    // Realizamos la Interacción 1
    const nrointeraccion1 = 1;
    const precioInteraccion1 = precio - (precio * porcentajeUnico) ;
    const monedaInteraccion1 = cantidad + (cantidad * porcentaje / 100);
    const resultadoInteraccion1 = (precioInteraccion1 * monedaInteraccion1)/apalancamiento;
    const precioPromedio1 = (precioInteraccion1 + precio )/2;
  
    // Realizamos la Interacción 2
    const nrointeraccion2 = 2;
    const precioInteraccion2 = precioInteraccion1- (precioInteraccion1 * porcentajeUnico);
    const monedaInteraccion2 = monedaInteraccion1 + (monedaInteraccion1 * porcentaje / 100);
    const resultadoInteraccion2 = precioInteraccion2 * monedaInteraccion2/apalancamiento;
    const precioPromedio2 = (precioInteraccion2 + precioInteraccion1 + precio)/3;

  
     // Realizamos la Interacción 3
     const nrointeraccion3 = 3;
     const precioInteraccion3 = precioInteraccion2- (precioInteraccion2 * porcentajeUnico);
     const monedaInteraccion3 = monedaInteraccion2 + (monedaInteraccion2 * porcentaje / 100);
     const resultadoInteraccion3 = precioInteraccion3 * monedaInteraccion3/apalancamiento;
    const precioPromedio3 = (precioInteraccion2 + precioInteraccion1 + precioInteraccion3)/3;

  
     
     // Realizamos la Interacción 4
     const nrointeraccion4 = 4;
     const precioInteraccion4 = precioInteraccion3- (precioInteraccion3 * porcentajeUnico);
     const monedaInteraccion4 = monedaInteraccion3 + (monedaInteraccion3 * porcentaje / 100);
     const resultadoInteraccion4 = precioInteraccion4 * monedaInteraccion4/apalancamiento;
    const precioPromedio4 = (precioInteraccion2 + precioInteraccion4 + precioInteraccion3)/3;

  
     // Realizamos la Interacción 5
     const nrointeraccion5 = 5;
     const precioInteraccion5 = precioInteraccion4- (precioInteraccion4 * porcentajeUnico);
     const monedaInteraccion5 = monedaInteraccion4 + (monedaInteraccion4 * porcentaje / 100);
     const resultadoInteraccion5 = precioInteraccion5 * monedaInteraccion5/apalancamiento;
    const precioPromedio5 = (precioInteraccion5 + precioInteraccion4 + precioInteraccion3)/3;

  
     // Realizamos la Interacción 6
     const nrointeraccion6 = 6;
     const precioInteraccion6 = precioInteraccion5- (precioInteraccion5 * porcentajeUnico);
     const monedaInteraccion6 = monedaInteraccion5 + (monedaInteraccion5 * porcentaje / 100);
     const resultadoInteraccion6 = precioInteraccion6 * monedaInteraccion6/apalancamiento;
     const precioPromedio6 = (precioInteraccion5 + precioInteraccion4 + precioInteraccion6)/3;
  
     // Realizamos la Interacción 7
     const nrointeraccion7 = 7;
     const precioInteraccion7 = precioInteraccion6- (precioInteraccion6 * porcentajeUnico);
     const monedaInteraccion7 = monedaInteraccion6 + (monedaInteraccion6 * porcentaje / 100);
     const resultadoInteraccion7 = precioInteraccion7 * monedaInteraccion7/apalancamiento;
     const precioPromedio7 = (precioInteraccion5 + precioInteraccion7 + precioInteraccion6)/3;

  
     // Calcular los valores solicitados
     
  const precioStopLoss = precioInteraccion7 / 1.01;
  const monedasStopLoss = monedaInteraccion1 + monedaInteraccion2 + monedaInteraccion3 + monedaInteraccion4 + monedaInteraccion5 + monedaInteraccion6 + monedaInteraccion7 + cantidad;
  const usdtStopLoss = precioStopLoss * monedasStopLoss;
  const gananciaUSDT = usdtStopLoss / apalancamiento;
  const totalRealInvertido = resultadoInteraccion1 + resultadoInteraccion2 + resultadoInteraccion3 + resultadoInteraccion4 +resultadoInteraccion5 + resultadoInteraccion6 + resultadoInteraccion7;

  const riesgoTotal = totalRealInvertido / capitalTotal;
  
  
    // Agregamos una fila a la tabla con los resultados de la Interacción 1
    const tablaInteraccion1 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion1 = tablaInteraccion1.insertRow();
    const celda1Interaccion1 = filaInteraccion1.insertCell();
    const celda2Interaccion1 = filaInteraccion1.insertCell();
    const celda3Interaccion1 = filaInteraccion1.insertCell();
    const celda4Interaccion1 = filaInteraccion1.insertCell();
    const celda5Interaccion1 = filaInteraccion1.insertCell();

    celda1Interaccion1.appendChild(document.createTextNode(`${nrointeraccion1}`));
    celda2Interaccion1.appendChild(document.createTextNode(`$${precioInteraccion1.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda3Interaccion1.appendChild(document.createTextNode(`${monedaInteraccion1.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda4Interaccion1.appendChild(document.createTextNode(`$${resultadoInteraccion1.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda5Interaccion1.appendChild(document.createTextNode(`$${precioPromedio1.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));

  
    // Agregamos una fila a la tabla con los resultados de la Interacción 2
    const tablaInteraccion2 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion2 = tablaInteraccion2.insertRow();
    const celda1Interaccion2 = filaInteraccion2.insertCell();
    const celda2Interaccion2 = filaInteraccion2.insertCell();
    const celda3Interaccion2 = filaInteraccion2.insertCell();
    const celda4Interaccion2 = filaInteraccion2.insertCell();
    const celda5Interaccion2 = filaInteraccion2.insertCell();

    celda1Interaccion2.appendChild(document.createTextNode(`${nrointeraccion2}`));
    celda2Interaccion2.appendChild(document.createTextNode(`$${precioInteraccion2.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda3Interaccion2.appendChild(document.createTextNode(`${monedaInteraccion2.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda4Interaccion2.appendChild(document.createTextNode(`$${resultadoInteraccion2.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda5Interaccion2.appendChild(document.createTextNode(`$${precioPromedio2.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));

  
    // Agregamos una fila a la tabla con los resultados de la Interacción 3
    const tablaInteraccion3 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion3 = tablaInteraccion3.insertRow();
    const celda1Interaccion3 = filaInteraccion3.insertCell();
    const celda2Interaccion3 = filaInteraccion3.insertCell();
    const celda3Interaccion3 = filaInteraccion3.insertCell();
    const celda4Interaccion3 = filaInteraccion3.insertCell();
    const celda5Interaccion3 = filaInteraccion3.insertCell();

    celda1Interaccion3.appendChild(document.createTextNode(`${nrointeraccion3}`));
    celda2Interaccion3.appendChild(document.createTextNode(`$${precioInteraccion3.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda3Interaccion3.appendChild(document.createTextNode(`${monedaInteraccion3.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda4Interaccion3.appendChild(document.createTextNode(`$${resultadoInteraccion3.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda5Interaccion3.appendChild(document.createTextNode(`$${precioPromedio3.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));

  
    // Agregamos una fila a la tabla con los resultados de la Interacción 4
    const tablaInteraccion4 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion4 = tablaInteraccion4.insertRow();
    const celda1Interaccion4 = filaInteraccion4.insertCell();
    const celda2Interaccion4 = filaInteraccion4.insertCell();
    const celda3Interaccion4 = filaInteraccion4.insertCell();
    const celda4Interaccion4 = filaInteraccion4.insertCell();
    const celda5Interaccion4 = filaInteraccion4.insertCell();

    celda1Interaccion4.appendChild(document.createTextNode(`${nrointeraccion4}`));
    celda2Interaccion4.appendChild(document.createTextNode(`$${precioInteraccion4.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda3Interaccion4.appendChild(document.createTextNode(`${monedaInteraccion4.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda4Interaccion4.appendChild(document.createTextNode(`$${resultadoInteraccion4.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda5Interaccion4.appendChild(document.createTextNode(`$${precioPromedio4.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
  
  
    // Agregamos una fila a la tabla con los resultados de la Interacción 5
    const tablaInteraccion5 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion5 = tablaInteraccion5.insertRow();
    const celda1Interaccion5 = filaInteraccion5.insertCell();
    const celda2Interaccion5 = filaInteraccion5.insertCell();
    const celda3Interaccion5 = filaInteraccion5.insertCell();
    const celda4Interaccion5 = filaInteraccion5.insertCell();
    const celda5Interaccion5 = filaInteraccion5.insertCell();

    celda1Interaccion5.appendChild(document.createTextNode(`${nrointeraccion5}`));
    celda2Interaccion5.appendChild(document.createTextNode(`$${precioInteraccion5.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda3Interaccion5.appendChild(document.createTextNode(`${monedaInteraccion5.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda4Interaccion5.appendChild(document.createTextNode(`$${resultadoInteraccion5.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda5Interaccion5.appendChild(document.createTextNode(`$${precioPromedio5.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));

      // Agregamos una fila a la tabla con los resultados de la Interacción 6
      const tablaInteraccion6 = document.getElementById('resultado-interaccion-1');
      const filaInteraccion6 = tablaInteraccion6.insertRow();
      const celda1Interaccion6 = filaInteraccion6.insertCell();
      const celda2Interaccion6 = filaInteraccion6.insertCell();
      const celda3Interaccion6 = filaInteraccion6.insertCell();
      const celda4Interaccion6 = filaInteraccion6.insertCell();
      const celda5Interaccion6 = filaInteraccion6.insertCell();

      celda1Interaccion6.appendChild(document.createTextNode(`${nrointeraccion6}`));
      celda2Interaccion6.appendChild(document.createTextNode(`$${precioInteraccion6.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
      celda3Interaccion6.appendChild(document.createTextNode(`${monedaInteraccion6.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
      celda4Interaccion6.appendChild(document.createTextNode(`$${resultadoInteraccion6.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
      celda5Interaccion6.appendChild(document.createTextNode(`$${precioPromedio6.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
  
      
        // Agregamos una fila a la tabla con los resultados de la Interacción 7
    const tablaInteraccion7 = document.getElementById('resultado-interaccion-1');
    const filaInteraccion7 = tablaInteraccion7.insertRow();
    const celda1Interaccion7 = filaInteraccion7.insertCell();
    const celda2Interaccion7 = filaInteraccion7.insertCell();
    const celda3Interaccion7 = filaInteraccion7.insertCell();
    const celda4Interaccion7 = filaInteraccion7.insertCell();
    const celda5Interaccion7 = filaInteraccion7.insertCell();

    celda1Interaccion7.appendChild(document.createTextNode(`${nrointeraccion7}`));
    celda2Interaccion7.appendChild(document.createTextNode(`$${precioInteraccion7.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda3Interaccion7.appendChild(document.createTextNode(`${monedaInteraccion7.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda4Interaccion7.appendChild(document.createTextNode(`$${resultadoInteraccion7.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
    celda5Interaccion7.appendChild(document.createTextNode(`$${precioPromedio7.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
  
  
  
    // Agregamos una fila a la tabla con los resultados del cálculo principal
    const tablaResultado = document.getElementById('resultado-principal');
    const filaResultado = tablaResultado.insertRow();
    const celda1Resultado = filaResultado.insertCell();
    celda1Resultado.appendChild(document.createTextNode(`USDT =$${resultado.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`));
  
    // Crear el elemento div
  const StopLossDiv = document.createElement("div");
  
  // Asignar los valores calculados al contenido del div
  StopLossDiv.innerHTML = `
  <table id="" class="striped">
  <p class="total-real-invertido">
  Total Real Invertido = $${totalRealInvertido.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})} <br>
  Capital Total Invertido = $${capitalTotal.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})} <br>
  Riesgo Total = $${riesgoTotal.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})} <br>
  </p>  
  
              <thead>
              <tr>
                  <th colspan="3" class="sl">Stop Loss</th>
                  <th rowspan="2" class="">Ganancia</th>

                 
                </tr>

                <tr>
                  <th class="sl">Precio</th>
                  <th class="sl">Monedas</th>
                  <th class="sl">USDT</th>
                </tr>
                
              </thead>
              <tbody>
                <tr class="resultados-finales">
                  <th class="sl">$${precioStopLoss.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}</th>
                  <th class="sl">${monedasStopLoss.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}</th>
                  <th class="sl">$${usdtStopLoss.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}</th>
                  <th class="ganancia">$${gananciaUSDT.toLocaleString('es-ES', {minimumFractionDigits: 4, maximumFractionDigits: 4})}</th>
                </tr>
              </tbody>
            </table>
  `;
  
// Obtener el div con id "resultado"
const resultadoDiv = document.querySelector("#resultado");

// Agregar el elemento div al final del div con id "resultado"
resultadoDiv.appendChild(StopLossDiv);
  
  }
  
  const porcentajeInput = document.getElementById("porcentaje");
  const porcentajeValor = document.getElementById("porcentaje-valor");
  
  porcentajeInput.addEventListener("input", () => {
    porcentajeValor.innerText = porcentajeInput.value;
  });