  function calcularIndemnizacion() {
    let sueldo = parseFloat(document.getElementById("sueldoBase").value) || 0;
    let anios = parseFloat(document.getElementById("aniosTrabajados").value) || 0;
    let meses = parseFloat(document.getElementById("mesesTrabajados").value) || 0;
    let pendiente = parseFloat(document.getElementById("salarioPendiente").value) || 0;
    let deudas = parseFloat(document.getElementById("deudas").value) || 0;

    let base = sueldo * anios;
    let bono14 = (sueldo / 12) * meses;
    let aguinaldo = (sueldo / 12) * meses;
    let total = base + bono14 + aguinaldo + pendiente - deudas;

    document.getElementById("resultadoIndemnizacion").innerHTML = `
      <strong>Indemnización:</strong> Q${total.toFixed(2)} `;
  }
