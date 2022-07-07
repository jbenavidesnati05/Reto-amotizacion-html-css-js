

const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
const interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');

// El query selector Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado
const llenarTabla = document.querySelector('#lista-tabla');

// El método addEventlistener, es un escuchador que indica al navegador que este atento a la interacción del usuario

btnCalcular.addEventListener('click', ()=> {
    calcularCuota(monto.value, interes.value, tiempo.value);

})


function calcularCuota (monto, interes, tiempo){
    let fechas = [];
    // Date.now(); trae la fecha actual
    let fechaActual =Date.now(); 
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, 'month');


    let pagoInteres = 0;
    let pagoCapital = 0;
    let cuota =0; 

    // La función Math. pow() retorna la base elevada al exponente , es decir, baseexponente .
    //  La base y el exponente estan en el sistema numérico decimal.
    cuota = monto*(Math.pow(1+interes/100,tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);

    console.log(cuota)

    // Crear la tabla 

    for(let i= 1; i<=tiempo; i++){

        pagoInteres = parseFloat(monto*(interes/100));
        pagoCapital = cuota-pagoInteres
        monto = parseFloat(monto-pagoCapital)

        //Formato fechas 
        fechas[i] = mes_actual.format('DD-MM-YYYY');
        // se podria usar con semana pero lo necesitamos con meses var b = a.add(1, 'week'); 
        mes_actual.add(1, 'month');

        // ¿Qué es el documento createElement?
        // En un documento HTML, el documento. El método createElement() crea el elemento HTML especificado por tagName,
        const row = document.createElement('tr')
        row.innerHTML= `
        <td>${fechas[i]}</td>
        <td>${cuota.toFixed(2)}</td>
        <td>${pagoCapital.toFixed(2)}</td>
        <td>${pagoInteres.toFixed(2)}</td>
        <td>${monto.toFixed(2)}</td>
    
        `;
        llenarTabla.appendChild(row)
    }
    
}       