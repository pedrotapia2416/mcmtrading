document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

  

  function calcularRango() {
    calcularLong();
    calcularShort();

  }


  function calcular() {
    // Obtener valores de los inputs
    var moneda = document.getElementById("moneda").value;
    var longEntrada = parseFloat(document.getElementById("long-entrada").value);
    var longStoploss = parseFloat(document.getElementById("long-stoploss").value);
    var shortEntrada = parseFloat(document.getElementById("short-entrada").value);
    var shortStoploss = parseFloat(document.getElementById("short-stoploss").value);
  
    // Calcular diferencias entre puntos y distancia entre puntos centrales
    var diffLong = ((longEntrada - longStoploss) / longStoploss) * 100  ;
    var diffShort = (( shortStoploss - shortEntrada) / shortEntrada ) * 100 ;
    var distanciaCentrales = (( shortEntrada - longEntrada ) / longEntrada) * 100;
  
    // Calcular posición
    var posicionLong = distanciaCentrales / diffLong;
    var posicionShort = distanciaCentrales / diffShort;

  
    // Agregar nueva fila a la tabla
    var tabla = document.getElementById("tabla");
    var nuevaFila = tabla.insertRow(-1);
    nuevaFila.innerHTML = "<td>" + moneda + "</td><td>" + diffLong + "</td><td>" + diffShort + "</td><td>" + distanciaCentrales + "</td><td>" + (posicionLong >= 2 ? "Cumple" : "No cumple") + "</td><td>" + (posicionShort >= 2 ? "Cumple" : "No cumple") + "</td>";
  
    // Mostrar mensaje de éxito
    document.getElementById("result").innerHTML = "Cálculo realizado con éxito";
  }

  function exportarExcel() {
    // Obtener los datos de la tabla
    const tabla = document.getElementById("tabla");
    if (!tabla) {
        console.error("No se pudo encontrar la tabla");
        return;
    }
    const datos = XLSX.utils.table_to_sheet(tabla);

    // Crear un nuevo libro de Excel y agregar los datos
    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, datos, "Datos");

    // Generar un nombre de archivo dinámicamente
    const fecha = new Date().toISOString().slice(0, 19).replace(/:/g, "-");
    const nombreArchivo = `datos_${fecha}.xlsx`;

    // Descargar el archivo Excel
    try {
        XLSX.writeFile(libro, nombreArchivo);
        console.log(`Archivo "${nombreArchivo}" exportado correctamente`);
    } catch (error) {
        console.error("Error al exportar el archivo:", error);
    }
}
