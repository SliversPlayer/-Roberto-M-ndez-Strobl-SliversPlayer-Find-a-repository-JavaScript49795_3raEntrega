//Primera Entrega
//Algorito debe tener:
//Condicional (If-Else-Switch)
//Ciclo (For - Do-While)

// Simulador de Rendición de Gastos
// En la empresa donde me trabajo, muchos de los trabajadores tienen
// labores en terreno, y los gastos de alimentación, estadia, combustibles, etc.
// durante los servicios deben ser rendidos para que la empresa los reembolse al trabajor,
// actualmente se utiliza una planilla excel con multiples validaciones de datos,
// ademas se debe tomar una fotografia a cada boleta e ingresar los datos, haciendo
// la tarea lenta y tediosa.

// Existen 3 opciones de rendición, 
// Fondo fijo: El trabajdor utiliza sus propios recursos los cuales rinde por
// medio de comprobantes de pago.
// Fondo por rendir: La empresa le entrega un monto de dinero el cual el empleado
// debe rendir posteriormente, en caso de que sobre dinero, este debe devolverlo,
// en caso contrario, se paga la diferencia al trabajador.
// Tarjeta de crédito: La empresa dispone de varias tarjetas de crédito para
// realizar compras, es idéntico a fondo fijo, pero se debe indicar el número
// de la TC con la que se hace el pago.

// Identificación de la rendición
let nombre;
let id;
let fecha;
let tipoRendicion = 0;
let numTarjeta = 0;
let porRendir = 0;
let continuar;

//Rendicion

let fechaRendicion;
let glosaRendicion;
let tipoDoc;
let centroCosto;
let monto;
let rendicion = [];
let continuarRendicion;
let totalMonto = 0;

//

function funcTipo(nombreRendicion) {
    switch (nombreRendicion) {
        case 1:
            nombreRendicion = `Fondo Fijo`;
            break;
        case 2:
            nombreRendicion = `Fondo por Rendir`;
            break;
        case 3:
            nombreRendicion = `Tarjeta de Crédito`;
            break;
    }
    return nombreRendicion;
}

nombre = `Juan Perez`;
id = 1234567;
fecha = `Febrero`;

/*
nombre = prompt(`Ingrese nombre del empleado`);
id = prompt(`Ingrese su ID`);
fecha = prompt(`Ingrese mes correspondiente a la rendición`);
*/

do {
    tipoRendicion = +prompt(`Indique el tipo de rendición (Ingrese el número)\n\n1.Fondo fijo\n2.Fondo por rendir\n3.Tarjeta de crédito`);

    if (tipoRendicion !== 1) {
        switch (tipoRendicion) {
            case 2:
                porRendir = +prompt(`Ingrese el monto a rendir`);
                break;
            case 3:
                numTarjeta = +prompt(`Ingrese los últimos 4 dígitos de la tarjeta`);
                break;
            default:
                alert(`Tipo incorrecto`)
                }
            }
    } while (tipoRendicion > 3 || tipoRendicion < 1)

alert(`Empleado: ${nombre}\nid: ${id}\nFecha Rendición: ${fecha}\nTipo Rendición: ${funcTipo(tipoRendicion)}`)

do {
    fechaRendicion = prompt(`Ingrese fecha DD-MM-YY`);
    glosaRendicion = prompt(`Ingrese descripción breve de la rendición`);
    tipoDoc = parseInt(prompt(`Boleta o Factura\n\n1.Boleta\n2.Factura`));
    centroCosto = prompt(`Ingrese el centro de costo según corresponda`);
    monto = parseFloat(prompt(`Monto a rendir`));

    rendicion.push(fechaRendicion);
    rendicion.push(glosaRendicion);
    rendicion.push(tipoDoc);
    rendicion.push(centroCosto);        
    rendicion.push(monto);

    totalMonto += monto;

    alert(`Fecha Rendición: ${fechaRendicion}\nDescripción: ${glosaRendicion}\nTipo Documento: ${tipoDoc}\nCentro de costo: ${centroCosto}\nMonto: ${monto}\nMonto Total: ${totalMonto.toFixed(0)}`)

    
    continuarRendicion = prompt('¿Desea ingresar otra rendición? si/no');
    if (continuarRendicion == "no") {
        console.log('Datos concatenados:', rendicion);
        break;
    }

    } while (continuarRendicion.toLowerCase() !== "no");



