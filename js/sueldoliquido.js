function calcularSueldo() {
  const salario = parseFloat(document.getElementById('salario').value) || 0;
  const bonificacion = parseFloat(document.getElementById('bonificacion').value) || 0;
  const comisiones = parseFloat(document.getElementById('comisiones').value) || 0;
  const ahorro = parseFloat(document.getElementById('ahorro').value) || 0;
  const prestamos = parseFloat(document.getElementById('prestamos').value) || 0;
  const totalGanado = salario + bonificacion + comisiones;
  const igss = salario * 0.0483;
  const totalDescuentos = ahorro + igss + prestamos;
  const sueldoLiquido = totalGanado - totalDescuentos;

  document.getElementById('resultadoGanado').innerHTML = `
    <h5>Total Ganado</h5>
    <p>Salario: Q${salario.toFixed(2)}</p>
    <p>Bonificación: Q${bonificacion.toFixed(2)}</p>
    <p>Comisiones: Q${comisiones.toFixed(2)}</p>
    <p><strong>Total: Q${totalGanado.toFixed(2)}</strong></p>
  `;

  document.getElementById('resultadoDescuentos').innerHTML = `
    <h5>Total Descuentos</h5>
    <p>Ahorro: Q${ahorro.toFixed(2)}</p>
    <p>IGSS (4.83% del salario): Q${igss.toFixed(2)}</p>
    <p>Préstamos: Q${prestamos.toFixed(2)}</p>
    <p><strong>Total: Q${totalDescuentos.toFixed(2)}</strong></p>
  `;

  document.getElementById('resultadoLiquido').innerHTML = `
    <h5>Sueldo Líquido</h5>
    <p><strong>Q${sueldoLiquido.toFixed(2)}</strong></p>
  `;
}
