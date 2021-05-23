let fecha = document.getElementById('fecha');
let nombre =document.getElementById('nombre');
let producto = document.getElementById('producto');
let precio = document.getElementById('precio');
let cantidad = document.getElementById('cantidad');
let table = document.getElementById('table');
let tbd = document.getElementById('tbd');
let subtotal = 0;
let filita;
let estado = 0;

function guardar(ev) {
    alert("Hola");
    if (estado == 0) {

        let fila = document.createElement("tr")

        let column_fecha = document.createElement("td");
        column_fecha.innerHTML=fecha.value;

        let column_cliente = document.createElement('td');
        column_cliente.innerHTML=nombre.value;

        let column_producto = document.createElement('td');
        column_producto.innerHTML=producto.value;

        let column_precio = document.createElement('td');
        column_precio.innerHTML=precio.value;

        let column_cantidad = document.createElement('td');
        column_cantidad.innerHTML=cantidad.value;


        let column_subtotal = document.createElement('td');
        column_subtotal.innerHTML=precio.value * cantidad.value;

        let column_accion = document.createElement('td');
        column_accion.innerHTML = "<a href='#' class='icono2' onclick='editar(this)'><i class='fas fa-check'></i></a>"+"<a href='#' class='icono1' onclick='eliminar(this)'></a>"
        
        fila.appendChild(column_fecha);
        fila.appendChild(column_cliente);
        fila.appendChild(column_producto);
        fila.appendChild(column_precio);
        fila.appendChild(column_cantidad);
        fila.appendChild(column_subtotal);
        fila.appendChild(column_accion);
        tbd.appendChild(fila);
        table.appendChild(tbd);
        limpiar();
    } else {
        filita.cells[0].innerHTML = fecha.value;
        filita.cells[1].innerHTML = nombre.value;
        filita.cells[2].innerHTML = producto.value;
        filita.cells[3].innerHTML = precio.value;
        filita.cells[4].innerHTML = cantidad.value;
        filita.cells[5].innerHTML = subtotal.value;
        limpiar();
        estado = 0;
    }
}

function editar() {
    filita = row.parentNode.parentNode;
    fecha.value = filita.cells[0].innerHTML;
    nombre.value = filita.cells[1].innerHTML;
    producto.value = filita.cells[2].innerHTML;
    precio.value = filita.cells[3].innerHTML;
    cantidad.value = filita.cells[4].innerHTML;
    // subtotal.value = filita.cells[5].innerHTML;
    estado = 1;
}

function eliminar() {
    let fil = row.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}

function limpiar() {
    fecha.value="";
    nombre.value="";
    producto.value="";
    precio.value="";
    cantidad.value="";
    // subtotal.value="";
    // accion.value="";
    fecha.focus();
}
