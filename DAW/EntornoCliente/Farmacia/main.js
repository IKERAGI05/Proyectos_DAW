//bloque inicializaciones
var ticket="<table border='1' class='tabla'>"+
            "<tr>"+
            "<th> Nombre</th>"+
            "<th> Cantidad </th>"+
            "<th> Precio U </th>"+
            "<th> Precio Total </th>"+
            "</tr>";
var totalVenta;
totalVenta=parseFloat(totalVenta);

var patronRef=/^\d{11}[A-Z]$/;
var patron_nombre=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

function validarRef(ref){
    if(!patronRef.test(ref)){
        return false;
    }
    return true;
}
function validarNombre(nombre){
    if(!patron_nombre.test(nombre)){
        return false;
    }
    return true;
}
//fin bloque inicializaciones

//bloque funciones
    function nifEncontrado(nif){
        
        for(x=0;x<usuarios.length;x++){

            if(usuarios[x].nif==nif){
                return true;
            }
        }
        return false;
    }
    function passValida(pass){
        for(x=0;x<usuarios.length;x++){
            if(pass==usuarios[x].pass){
                return true;
            }

        }
        return false;
    }

    function volverInicio(){
        document.getElementById('inicioSesion').style.display="block";
        document.getElementById('menu').style.display="none";
        document.getElementById('nifInicio').disabled=false;
        document.getElementById('passInicio').value="";
        document.getElementById('nifInicio').value="";
        document.getElementById('usuario').innerHTML="";
    }
//fin bloque funciones
//bloque menu
function mostrarMenu(){
    var nif= document.getElementById('nifInicio').value;
    var pass= document.getElementById('passInicio').value;
    var nifEncontrado=false;
    var y;
    for(x=0;x<usuarios.length;x++){
        if(usuarios[x].nif==nif){
            nifEncontrado=true;
            y=x;
            x=usuarios.length;
        }
    }
    if(nifEncontrado){
        if(usuarios[y].pass==pass){
            document.getElementById('menu').style.display="block";
            document.getElementById('inicioSesion').style.display="none";
            document.getElementById('usuario').innerHTML="<h5>Iniciado/a sesion: "+usuarios[y].nombre+"</h5>";
        }else{
            alert("Contraseña incorrecta");
            document.getElementById('passInicio').value="";
            document.getElementById('nifInicio').disabled=true;
            document.getElementById('passInicio').focus();
        }
    }else{
        alert("NIF incorrecto");
        document.getElementById('passInicio').value="";
        document.getElementById('nifInicio').value="";
        document.getElementById('nifInicio').focus();
    }

}

function volverMenu(){
    document.getElementById('menu').style.display="block";
    document.getElementById('ventas').style.display="none";
    document.getElementById('compra').style.display="none";
    document.getElementById('altaCompra').style.display="none";
    document.getElementById('modCompra').style.display="none";
    document.getElementById('pedidos').style.display="none";
    document.getElementById('selectVenta').innerHTML="";
    

}
//fin bloque menu
//bloque ventas
function cargarSelect(){
    for(x=0;x<medicamentos.length;x++){
        if(medicamentos[x].stock>0){
        document.getElementById('selectVenta').innerHTML+="<option value='"+medicamentos[x].ref+"'>"+medicamentos[x].nombre+"</option>";
        }
  }
}
function mostrarVentas(){
    cargarSelect();
    document.getElementById('menu').style.display="none";
    document.getElementById('ventas').style.display="block";

     document.getElementById('nCantidadVenta').value="";
     document.getElementById('bImprimirTicket').disabled=true;
     document.getElementById('bVender').disabled=false;
     document.getElementById('ticketVenta').style.display="none";
     document.getElementById('ticketVenta').innerHTML="";
     document.getElementById('ventasForm').style.display="block";
     document.getElementById('tituloTicket').style.display="none";
     document.getElementById('ventas').style.boxShadow="0px 3px 10px grey";
      ticket="<table border='1' class='tabla'>"+
            "<tr>"+
            "<th> Nombre</th>"+
            "<th> Cantidad </th>"+
            "<th> Precio U </th>"+
            "<th> Precio Total </th>"+
            "</tr>";
    totalVenta=0;
    

}
function rellenarTicket(indice,cantidad){
    
    medicamentos[indice].precioVenta=parseFloat(medicamentos[indice].precioVenta);
    cantidad=parseInt(cantidad);
    var precioTotalProducto;
    precioTotalProducto=parseFloat(precioTotalProducto);
   precioTotalProducto=medicamentos[indice].precioVenta*cantidad;
    totalVenta=totalVenta+precioTotalProducto;
   
    ticket+="<tr>"+
                        "<td>"+medicamentos[indice].nombre+"</td>"+
                        "<td>"+cantidad+"</td>"+
                        "<td>"+medicamentos[indice].precioVenta+"€"+"</td>"+
                        "<td>"+precioTotalProducto.toFixed(2)+"€"+"</td>"+
                        "</tr>";
                       
                
}
function finalizarCompra(){
    ticket+="<tr class='fNegra'>"+
            "<td>TOTAL</td>"+
            "<td></td>"+
            "<td></td>"+
            "<td>"+totalVenta.toFixed(2)+"€</td>"+
            "</tr>"+
            "</table>";
            document.getElementById('ticketVenta').style.display="block";    
            document.getElementById('ticketVenta').innerHTML=ticket;
            document.getElementById('bVender').disabled=true;
            document.getElementById('ventasForm').style.display="none";
            document.getElementById('tituloTicket').style.display="block";
            document.getElementById('ventas').style.boxShadow="0px 0px 0px";
}

function vender(){
    var ref= document.getElementById('selectVenta').value;
    var cantidad= document.getElementById('nCantidadVenta').value;
    var y;
    for(x=0;x<medicamentos.length;x++){
        if(medicamentos[x].ref==ref){
            y=x;
            x=medicamentos.length;
        }
    }
    cantidad=parseInt(cantidad);
        if(cantidad>0){
            if(medicamentos[y].stock>=cantidad){
                alert("Producto añadido correctamente");
                medicamentos[y].stock-=cantidad;
                document.getElementById('nCantidadVenta').value="";  
                rellenarTicket(y, cantidad);
                document.getElementById('bImprimirTicket').disabled=false;
            }else{
                alert("Stock no disponible");
                document.getElementById('nCantidadVenta').value="";
                document.getElementById('nCantidadVenta').focus();
                document.getElementById('nReferencia').disabled=true;
            }
        }else{
            alert("Introduzca una cantidad positiva");
            document.getElementById('nCantidadVenta').value="";
                document.getElementById('nCantidadVenta').focus();
                document.getElementById('nReferencia').disabled=true;
        }
    

}
//fin bloque ventas

//bloque compras
    function mostrarCompras(){
    document.getElementById('compra').style.display="block";
    document.getElementById('menu').style.display="none";
    document.getElementById('modCompra').style.display="none";
    document.getElementById('altaCompra').style.display="none";
    document.getElementById('nombreCompra').value="";
    document.getElementById('cantidadAltaCompra').value="";
                                    document.getElementById('cantidadAltaCompra').value="";
                                    document.getElementById('precioVentaAltaCompra').value="";
                                    document.getElementById('precioCompraAltaCompra').value="";
                                    document.getElementById('farmaceuticaAltaCompra').value="";
                                    document.getElementById('nombreAltaCompra').value="";
                                    document.getElementById('refAltaCompra').value="";
                                    document.getElementById('cantidadModCompra').value="";
    }

    function pedir(){
        var nombre= document.getElementById('nombreCompra').value;
        var y;
        var encontrado=false;
        for(x=0;x<medicamentos.length;x++){
            if(nombre==medicamentos[x].nombre){
                y=x;
                encontrado=true;
                x=medicamentos.length;
            }
        }

        if(encontrado){
            document.getElementById('compra').style.display="none";
            document.getElementById('modCompra').style.display="block";
            document.getElementById('refModCompra').value=medicamentos[y].ref;
            document.getElementById('nombreModCompra').value=medicamentos[y].nombre;
            document.getElementById('precioCompraModCompra').value=medicamentos[y].precioCompra;
        }else{
           var opcion= confirm("El medicamento no existe, ¿desea registrarlo?");
            if(opcion){
            document.getElementById('compra').style.display="none";
            document.getElementById('altaCompra').style.display="block";
            document.getElementById('nombreAltaCompra').value=nombre;
            }else{
                document.getElementById('nombreCompra').value="";
                document.getElementById('nombreCompra').focus();
            }
        }
    }
    function comprar(){
        ref=document.getElementById('refModCompra').value;
        cantidad=document.getElementById('cantidadModCompra').value;
        var y;
        for(x=0;x<medicamentos.length;x++){
            if(medicamentos[x].ref==ref){
                y=x;
                x=medicamentos.length;
            }
        }
        cantidad=parseInt(cantidad);
        if(cantidad>0){
        medicamentos[y].stock+=cantidad;
        alert(medicamentos[y].stock);
        alert("Medicamento pedido correctamente");
        mostrarCompras();
        }else{
            alert("La cantidad debe ser positiva");
            document.getElementById('cantidadModCompra').value="";
            document.getElementById('cantidadModCompra').focus();
        }
    }

    function registrarMed(){
        vRef= document.getElementById('refAltaCompra').value;
        vNombre= document.getElementById('nombreAltaCompra').value;
        vFarmaceutica= document.getElementById('farmaceuticaAltaCompra').value;
        vPrecioCompra= document.getElementById('precioCompraAltaCompra').value;
        vPrecioVenta= document.getElementById('precioVentaAltaCompra').value;
        vCantidad= document.getElementById('cantidadAltaCompra').value;
        vCantidad=parseInt(vCantidad);
        if(validarRef(vRef)){
            if(validarNombre(vNombre)){
                if(validarNombre(vFarmaceutica)){
                    if(vPrecioCompra>0){
                        if(vPrecioVenta>0){
                            if(vCantidad>0){
                                if(Number.isInteger(vCantidad)){
                                    medicamento=new Object();
                                    medicamento= {
                                        'ref': vRef,
                                        'nombre': vNombre,
                                        'farmaceutica': vFarmaceutica,
                                        'precioCompra': vPrecioCompra,
                                        'precioVenta': vPrecioVenta,
                                        'stock': vCantidad
                                    }
                                    medicamentos.push(medicamento);
                                    alert("Medicamento registrado y pedido");
                                    mostrarCompras();
                                }else{
                                    alert("El numero de productos debe ser un número entero");
                                    document.getElementById('cantidadAltaCompra').value="";
                                    document.getElementById('cantidadAltaCompra').focus();
                                    
                                }
                            }else{
                                alert("No se pude pedir en negativo");
                                document.getElementById('cantidadAltaCompra').value="";
                                document.getElementById('cantidadAltaCompra').focus();
                            }
                        }else{
                            alert("El precio de venta debe ser positivo");
                            document.getElementById('precioVentaAltaCompra').value="";
                            document.getElementById('precioVentaAltaCompra').focus();
                        }
                    }else{
                        alert("El precio de compra debe ser positivo");
                        document.getElementById('precioCompraAltaCompra').value="";
                        document.getElementById('precioCompraAltaCompra').focus();
                    }

                }else{
                    alert("La farmaceutica no es valida");
                    document.getElementById('farmaceuticaAltaCompra').value="";
                    document.getElementById('farmaceuticaAltaCompra').focus();
                }
            }else{
                alert("El nombre no es valido");
                document.getElementById('nombreAltaCompra').value="";
                document.getElementById('nombreAltaCompra').focus();
            }
        }else{
            alert("La referencia no es valida");
            document.getElementById('refAltaCompra').value="";
            document.getElementById('refAltaCompra').focus();
        }
    }



//fin bloque compras
//bloque pedidos
    function mostrarPedidos(){
        var tablaPedidos="<table border='1' class='tabla'>"+
"<tr>"+
"<th> Referencia</th>"+
"<th> Farmaceutica</th>"+
"<th> Nombre</th>"+
"<th> Precio Compra </th>"+
"<th> Precio Venta </th>"+
"<th> Stock </th>"+
"</tr>";
        document.getElementById('menu').style.display="none";
        document.getElementById('pedidos').style.display="block";
        var existen=false;
        for(x=0;x<medicamentos.length;x++){
            if(medicamentos[x].stock<=5){
                tablaPedidos+="<tr>"+
                            "<td>"+medicamentos[x].ref+"</td>"+
                            "<td>"+medicamentos[x].farmaceutica+"</td>"+
                            "<td>"+medicamentos[x].nombre+"</td>"+
                            "<td>"+medicamentos[x].precioCompra+"€</td>"+
                            "<td>"+medicamentos[x].precioVenta+"€</td>"+
                            "<td>"+medicamentos[x].stock+"</td>"+
                            "</tr>";
                            existen=true;

            }

        }
        if(existen){
            tablaPedidos+="</table>";
        document.getElementById('capaTablaPedidos').innerHTML=tablaPedidos;
        }else{
            alert("No existen pedidos");
            volverMenu();
        }
    }
//fin bloque pedidos


