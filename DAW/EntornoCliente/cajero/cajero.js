var tarjetas=[{'nombre': 'Josu','apel':'Mellado','dni':'28040001','numero': '1234', 'pin':'1234', 'bloqueado': false, 'saldo': 2500.19},
{'nombre': 'Imanol','apel':'Garcia', 'dni':'60649013','numero': '5498524781638140', 'pin':'4321', 'bloqueado': false, 'saldo': 15350.50},
{'nombre': 'Jonander','apel':'Lopez', 'dni':'73541544','numero': '5466443058350354', 'pin':'5678', 'bloqueado': false, 'saldo': 9300},
{'nombre': 'Ekaitz','apel':'Gomez', 'dni':'04422050','numero': '5289481217756512', 'pin':'8765', 'bloqueado': false, 'saldo': 660.54}];
var cambiarPin=false;
var introducirNif=false;
var retirada=false;
var miModal=bootstrap.Modal.getOrCreateInstance($("#miModal"));
var tabla="<table class='table'><tr><th>Fecha</th><th>Nombre</th><th>Apellido</th><th>Diferencia</th><th>Saldo</th></tr>";
//funciones
function esconderSwitch(){
    $(".capa-switch").hide();
    $(".capaTarjeta").slideDown();
    $(".capaTeclado").slideDown();
}
function volverInicio(){
    $(".capa-switch").show();
    $(".capaInput").show();
    $(".capaTarjeta").hide();
    $(".capaPin").hide();
    $(".capaTeclado").hide();
    $(".capaTitu").hide();
    $(".capaDni").hide();
    $(".capaRetirada").hide();
    $(".capaIR").hide();
    clearTimeout(esconder);
    $("#bSwitch").prop("checked",false);
     cambiarPin=false;
     retirada=false;
     introducirNif=false;
     intro=false;
     cont=3;
     y=0;
     $("#titular").empty();
     $("#nTarjeta").val("");
     $("#pin").val("");
     $("#nif").val("");
}
function transicion(){
    $(".capaInput").hide();
    $(".capaTeclado").hide();
    $(".capaIR").show();
}
function volverMenu(){
    $(".capaIR").show();
    $(".capaBotonesDinero").hide();
    suma=0;
    tabla="<table><tr><th>Fecha</th><th>Nombre</th><th>Apellido</th><th>Diferencia</th><th>Saldo</th></tr>";
    
    $("#saldo").append("0€");
}
//fin funciones


//botones númericos
$("#b1").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="1";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="1";
        $("#nif").val(n);
        }
    }
    else{      
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="1";
    $("#nTarjeta").val(n);
    }
    }
});
$("#b2").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="2";
        $("#pin").val(n);
        }
    }
    else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="2";
        $("#nif").val(n);
        }
    }else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="2";
    $("#nTarjeta").val(n);
    }
    }
});
$("#b3").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="3";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="3";
        $("#nif").val(n);
        }
    }else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="3";
    $("#nTarjeta").val(n);
    }
    }

});
$("#b4").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="4";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="4";
        $("#nif").val(n);
        }
    }
    else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="4";
    $("#nTarjeta").val(n);
    }
    }
});
$("#b5").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="5";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
            if(n<8){
        n+="5";
        $("#nif").val(n);
        }
    }
        }
    else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="5";
    $("#nTarjeta").val(n);
    }
    }
});
$("#b6").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="6";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="6";
        $("#nif").val(n);
        }
    }
    else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="6";
    $("#nTarjeta").val(n);
    }
    }
});
$("#b7").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="7";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="7";
        $("#nif").val(n);
        }
    }
    else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="7";
    $("#nTarjeta").val(n);
    }
    }
});
$("#b8").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="8";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="8";
        $("#nif").val(n);
        }
    }
    else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="8";
    $("#nTarjeta").val(n);
    }
    }
});
$("#b9").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="9";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="9";
        $("#nif").val(n);
        }
    }
    else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="9";
    $("#nTarjeta").val(n);
    }
    }
});
$("#b0").click(function(){
    if(cambiarPin){
        n=$("#pin").val();
        if(n.length<4){
        n+="0";
        $("#pin").val(n);
        }
    }else if(introducirNif){
        n=$("#nif").val();
        if(n.length<8){
        n+="0";
        $("#nif").val(n);
        }
    }
    else{
    n=$("#nTarjeta").val();
    if(n.length<16){
    n+="0";
    $("#nTarjeta").val(n);
    }
    }
});
//fin botones númericos

//boton cancelar keypad
$("#bCancelar").click(function(){
        volverInicio();

});
//bCorregir keypad
$("#bCorregir").click(function(){
    if(cambiarPin){
     $("#pin").val("");
    }
    else if(introducirNif){
    n=$("#nif").val();
    n=n.slice(0,n.length-1);
    $("#nif").val(n);
    }else{
   n=$("#nTarjeta").val();
    n=n.slice(0,n.length-1);
    $("#nTarjeta").val(n);
    }

});
//bContinuar keypad
var y;
var cont=3;
$("#bContinuar").click(function(){
    if(cambiarPin){  
        //var encontrado=false;
        pin=$("#pin").val();
       if(tarjetas[y].pin==pin){
            if(!tarjetas[y].bloqueado){
                $.toast({
                    heading: 'Correcto',
                    text: 'pin correcto.',
                    showHideTransition: 'slide',
                    icon: 'success'
                });
            $("#titular").append("<b>TITULAR: "+tarjetas[y].nombre+" "+tarjetas[y].apel+"</b>");
            $(".capaTitu").slideDown();
            introducirNif=true;
            cambiarPin=false;
            $(".capaDni").slideDown();
            }else{
                $.alertable.alert("Esta tarjeta ha sido bloqueada, para mas informacion contacte con Liberty Bank");
                volverInicio();
            }
       }else{
        cont--;
        $.toast({
            heading: 'Error',
            text: 'Pin incorrecto le quedan '+cont+' intentos.',
            showHideTransition: 'plain',
            icon: 'error'
        });
       }
       if(cont<1){
        tarjetas[y].bloqueado=true;
        $.alertable.alert("Tu tarjeta ha sido bloqueada");
                volverInicio();
       }
    }else if(introducirNif){
        dni= $("#nif").val();
        if(dni==tarjetas[y].dni){
            transicion();
            intro=false;

        }else{
            $.toast({
                heading: 'Error',
                text: 'Nif incorrecto.',
                showHideTransition: 'plain',
                icon: 'error'
            });
            volverInicio();
        }
    }
    else{
        num=$("#nTarjeta").val();
        var encontrado=false;
        for(var i=0;i<tarjetas.length;i++){
            if(num==tarjetas[i].numero){
                encontrado=true;
                y=i;
                i=tarjetas.length;
            }
        }
        if(encontrado){
            cambiarPin=true;
            $(".capaPin").slideDown();
            $.toast({
                heading: 'Correcto',
                text: 'Tarjeta correcta.',
                showHideTransition: 'slide',
                icon: 'success'
            });
            
        }else{
            
            $("#nTarjeta").val("");
            $.toast({
                heading: 'Error',
                text: 'Tarjeta inexistente.',
                showHideTransition: 'plain',
                icon: 'error'
            });
            volverInicio();
        }
    }

});
//boton switch inicio
$("#bSwitch").click(function(){
    if($("#bSwitch").is(':checked')){
        esconder=setTimeout(esconderSwitch,1500);
        
    }
});
//boton entrar a ingreso
$("#bIngreso").click(function(){
    retirada=false;
    $(".capaBotonesDinero").show();
    $(".capaIR").hide();
    $("#bRIDinero").html('Ingresar');
    $("#titBotones").append("Ingreso");
    $(".modal-body").empty();
    $(".modal-header").empty();
    $("#saldo").empty();
});
//boton entrar a retirada
$("#bRetirada").click(function(){
    retirada=true;
    $(".capaBotonesDinero").show();
    $(".capaIR").hide();
    $("#titBotones").append("Retirar");
    $("#bRIDinero").html('Retirar');
    $(".modal-body").empty();
    $(".modal-header").empty();
    $("#saldo").empty();

});
//boton volver al inicio
$("#bVolverDinero").click(function(){
    volverMenu();
});
//boton entrar a ver el saldo
$("#bMiSaldo").click(function(){
    var fecha=new Date();
    $(".capaIR").hide();
    $(".miSaldo").show();
    $("#labelSaldo").empty();
    $("#labelSaldo").append(tarjetas[y].saldo+"€");
    $("#labelFecha").append(fecha.toLocaleDateString());
    $("#labelHora").append(fecha.toLocaleTimeString());

});
$("#bVolverSaldo").click(function(){
    $(".capaIR").show();
    $(".miSaldo").hide();
});
$("#bSalir").click(function(){
    volverInicio();
});
var suma=0;
$("#b10Euros").click(function(){
    $("#saldo").empty();
    n=$("#b10Euros").val();
    suma+=parseInt(n);
    $("#saldo").append(suma+"€");
});
$("#b20Euros").click(function(){
    $("#saldo").empty();
    n=$("#b20Euros").val();
    suma+=parseInt(n);
    $("#saldo").append(suma+"€");
});
$("#b50Euros").click(function(){
    $("#saldo").empty();
    n=$("#b50Euros").val();
    suma+=parseInt(n);
    $("#saldo").append(suma+"€");
});
$("#b100Euros").click(function(){
    $("#saldo").empty();
    n=$("#b100Euros").val();
    suma+=parseInt(n);
    $("#saldo").append(suma+"€");
});
$("#b150Euros").click(function(){
    $("#saldo").empty();
    n=$("#b150Euros").val();
    suma+=parseInt(n);
    $("#saldo").append(suma+"€");
});
$("#b200Euros").click(function(){
    $("#saldo").empty();
    n=$("#b200Euros").val();
    suma+=parseInt(n);
    $("#saldo").append(suma+"€");
});
$("#bRIDinero").click(function(){
if(retirada){
    if(tarjetas[y].saldo>suma){
        if(suma>0){
        tarjetas[y].saldo-=suma;

   
 
 $.alertable.confirm("¿Desea ver el justificante de la operación?").then(function() {
    date= new Date();
    $("#tituloModal").append("Informe de su retirada");
    tabla+="<tr>"+"<td>"+date.toLocaleDateString('ig-ng')+"</td>"+
    "<td>"+tarjetas[y].nombre+
    "</td>"+"<td>"+tarjetas[y].apel+
    "</td>"+"<td>-"+suma+
    "€</td>"+"<td>"+tarjetas[y].saldo+"€</td>"+
    "</tr>"+"</table>";
    $("#cuerpoModal").append(tabla);
   
    miModal.show();
    volverMenu();    
    },function() {
    
        $.toast({
            heading: 'Correcto',
            text: 'Extraccion completada',
            position: 'mid-center',
            showHideTransition: 'plain',
            icon: 'success'
        });   
    volverMenu();
    });
    
                                      
        }else{
            $.toast({
                heading: 'Error',
                text: 'Debes seleccionar una cantidad para la extracción',
                position: 'mid-center',
                showHideTransition: 'plain',
                icon: 'error'
            });
        }
    }else{
        $.toast({
            heading: 'Error',
            text: 'No tienes suficiente saldo para realizar esta operacion',
            position: 'mid-center',
            showHideTransition: 'plain',
            icon: 'error'
        });
       
    }
}else{
    if(tarjetas[y].saldo>suma){
        if(suma>0){
        tarjetas[y].saldo+=suma;

   
 
 $.alertable.confirm("¿Desea ver el justificante de su operacion?").then(function() {
    date= new Date();
    $("#tituloModal").append("Informe de su ingreso");
    tabla+="<tr>"+"<td>"+date.toLocaleDateString('ig-ng')+"</td>"+
    "<td>"+tarjetas[y].nombre+
    "</td>"+"<td>"+tarjetas[y].apel+
    "</td>"+"<td>+"+suma+
    "€</td>"+"<td>"+tarjetas[y].saldo+"€</td>"+
    "</tr>"+"</table>";
    $("#cuerpoModal").append(tabla);
   
    miModal.show();
    volverMenu();    
    },function() {
    
        $.toast({
            heading: 'Correcto',
            text: 'Ingreso completado',
            position: 'mid-center',
            showHideTransition: 'plain',
            icon: 'success'
        });   
    volverMenu();
    });
    
                                      
        }else{
            $.toast({
                heading: 'Error',
                text: 'Debes seleccionar una cantidad para la extracción',
                position: 'mid-center',
                showHideTransition: 'plain',
                icon: 'error'
            });
        }
    }else{
        $.toast({
            heading: 'Error',
            text: 'No tienes suficiente saldo para realizar esta operacion',
            position: 'mid-center',
            showHideTransition: 'plain',
            icon: 'error'
        });
       
    }


}
});