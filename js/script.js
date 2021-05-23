const fecha = document.getElementById('fecha');
const nombre =document.getElementById('nombre');
const producto = document.getElementById('producto');
const precio = document.getElementById('precio');
const cantidad = document.getElementById('cantidad');
const table = document.getElementById('table');
const tbd = document.getElementById('tbd');
const diverror = document.getElementById('resultado-error');
let filita;
let estado = 0;

function guardar(ev) {
    if(!validarCampos()){return;}

    if (estado == 0) {
        let fila = document.createElement("tr")

        let column_fecha = document.createElement("td");
        column_fecha.innerHTML=fecha.value;

        let column_cliente = document.createElement('td');
        column_cliente.dataset.nombreid = nombre.value;
        column_cliente.innerHTML=nombre.options[nombre.selectedIndex].text;

        let column_producto = document.createElement('td');
        column_producto.dataset.productoid = producto.value;
        column_producto.innerHTML=producto.options[producto.selectedIndex].text;

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
        // filita.cells[1].innerHTML = nombre.value;
        // filita.cells[2].innerHTML = producto.value;
        filita.cells[1].innerHTML = nombre.options[nombre.selectedIndex].text;
        filita.cells[2].innerHTML = producto.options[producto.selectedIndex].text;
        filita.cells[3].innerHTML = precio.value;
        filita.cells[4].innerHTML = cantidad.value;
        filita.cells[5].innerHTML = precio.value*cantidad.value;
        limpiar();
        estado = 0;
    }
}

function editar(ahref) {
    limpiarResaltado();
    filita = ahref.parentNode.parentNode;
    filita.classList.add("filasombra");
    fecha.value = filita.cells[0].innerHTML;
    // nombre.value = filita.cells[1].innerHTML;
    // producto.value = filita.cells[2].innerHTML;
    nombre.value = filita.cells[1].dataset.nombreid;
    producto.value = filita.cells[2].dataset.productoid;
    precio.value = filita.cells[3].innerHTML;
    cantidad.value = filita.cells[4].innerHTML;
    estado = 1;
}

function eliminar(ahref) {
    let fil = ahref.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}

function limpiar() {
    fecha.value="";
    nombre.value=0;
    producto.value=0;
    precio.value="";
    cantidad.value="";
    // subtotal.value="";
    // accion.value="";
    fecha.focus();
    if(filita){
        filita.classList.remove("filasombra");
    }
}

function limpiarResaltado() {
    table.querySelectorAll(".filasombra").forEach(e =>e.classList.remove("filasombra"));
}

function validarCampos(){
    let mensaje_error = "";
    if(fecha.value === ""){
        mensaje_error += "Debes ingresar una fecha \n";
    }
    if(nombre.value == 0){
        mensaje_error += "Debe escoger un cliente \n";
    }
    if(producto.value == 0){
        mensaje_error += "Debe escoger un producto \n";
    }
    if(precio.value === ""){
        mensaje_error += "Debe ingresar un precio \n";
    }
    if(cantidad.value === ""){
        mensaje_error += "Debe ingresar una cantidad \n";
    }
    if (mensaje_error === ""){
        diverror.style.display = "none";
    }else{
        diverror.style.display = "block";
        diverror.innerText = mensaje_error;
    }
    return mensaje_error === ""
}
