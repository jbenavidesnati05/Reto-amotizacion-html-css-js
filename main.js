var monto = document.getElementById("monto");
var tiempo = document.getElementById("tiempo");
var interes = document.getElementById("interes");
var btnCalcular = document.getElementById("btnCalcular");

const llenarTabla = document.querySelector("#lista-tabla");

btnCalcular.addEventListener("click", () => {
  calcularCuota(monto.value, interes.value, tiempo.value);
});

function calcularCuota(monto, interes, tiempo) {
  let pagoInteres = 0;
  let pagoCapital = 0;
  let cuota = 0;

  cuota =
    (monto * ((Math.pow(1 + interes / 100, tiempo) * interes) / 100)) /
    (Math.pow(1 + interes / 100, tiempo) - 1);

  for (let mes = 0; mes <= tiempo; mes++) {
    if(mes==0){
        pagoInteres = parseFloat(monto * (interes / 100));
        pagoCapital = parseFloat(cuota - pagoInteres);
        monto = parseFloat(monto);
    
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${mes.toFixed(0)}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${monto.toFixed(1)}</td>
            `;
        llenarTabla.appendChild(row);

    }else{
        pagoInteres = parseFloat(monto * (interes / 100));
        pagoCapital = parseFloat(cuota - pagoInteres);
        monto = parseFloat(monto - pagoCapital);
    
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${mes.toFixed(0)}</td>
            <td>${cuota.toFixed(1)}</td>
            <td>${pagoCapital.toFixed(1)}</td>
            <td>${pagoInteres.toFixed(1)}</td>
            <td>${monto.toFixed(1)}</td>
            `;
        llenarTabla.appendChild(row);

    }

  }
}
