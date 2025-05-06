 // Cuando se hace clic en el botón "Guardar"
    document.getElementById("guardar").onclick = function () {
        var nombre = document.getElementById("nombre").value;
        var fecha = document.getElementById("fecha").value;
        var puesto = document.getElementById("puesto").value;
        var salario = document.getElementById("salario").value;

        if (nombre === "" || fecha === "" || puesto === "" || salario === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Obtener la tabla
        var tabla = document.getElementById("tablaEmpleados").getElementsByTagName("tbody")[0];
        var nuevaFila = tabla.insertRow();
        var celda1 = nuevaFila.insertCell(0);
        var celda2 = nuevaFila.insertCell(1);
        var celda3 = nuevaFila.insertCell(2);
        var celda4 = nuevaFila.insertCell(3);

        celda1.innerHTML = nombre;
        celda2.innerHTML = fecha;
        celda3.innerHTML = puesto;
        celda4.innerHTML = "Q" + parseFloat(salario).toFixed(2);

        document.getElementById("nombre").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("puesto").value = "";
        document.getElementById("salario").value = "";
    };

    // Eliminar primera fila
    document.getElementById("eliminarPrimero").onclick = function () {
        var tabla = document.getElementById("tablaEmpleados").getElementsByTagName("tbody")[0];
        if (tabla.rows.length > 0) {
            tabla.deleteRow(0);
        }
    };

    // Eliminar última fila
    document.getElementById("eliminarUltimo").onclick = function () {
        var tabla = document.getElementById("tablaEmpleados").getElementsByTagName("tbody")[0];
        if (tabla.rows.length > 0) {
            tabla.deleteRow(tabla.rows.length - 1);
        }
    };


