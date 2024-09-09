//Inicializaciones
$(document).ready(function(){$("#bCrud").slideDown(1000);
        $("#contadorPlazas").slideDown(1000);
        $("#ES").slideDown(1000);});
var coches=[{'matricula':'3456FGH', 'marca': 'Porsche', 'modelo': 'GT3 RS', 'nifPropietario':'12345678H', 'color': '#4054B2' , 'parking': false}];
var propietarios=[{'nif':'12345678H', 'nombre':'Josu', 'apel1': 'Mellado', 'apel2': 'Apraiz', 'tlf': '610200300', 'mail': 'Josu@gmail.com', 'nVehiculos':1}];
var usuarios=[{'nif':'12345678H','pass':'123', 'nombre':'Josu'}, {'nif':'12345678B','pass':'321', 'nombre':'Ander'}];
var plazas=400;
var patronNif=/^\d{8}[a-zA-Z]$/;
var patronMatricula=/^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/;
var patronMail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
var patronAlfaNumerico=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
var patronTlf=/^[67]\d{8}$/;
$('#tContadorPlazas').append("<b>"+plazas+"</b>");
//Fin inicializaciones
//Bloque funcional

function volverMenu(){
    $("#inicio").show();
    $("#ingreso").hide();
    $("#altasCoche").hide();
    $("#bCrud").slideDown(1000);
    $("#contadorPlazas").slideDown(1000);
    $("#ES").slideDown(1000);
    $("#altasPropietario").hide();
    $("#bajas").hide();
    $("#entradas").hide();
    $("#salidas").hide();
}

function esconderMenu(){
    $("#ES").hide();
    $("#contadorPlazas").hide();
    $("#bCrud").hide();
}

function mostrarAltas(){
    esconderMenu();
    $("#altasCoche").slideDown(200);
    $("#matricula").val("");
    $("#marca").val("");
    $("#modelo").val("");
    $("#nifPropietario").val("");
    $("#matricula").focus();
}

function formatoNif(nif){

    letras=["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    var  num= nif.substring(0,8);
    parseInt(num);
    var  letra= nif.substring(8,9);
    var x= num%23;
    if(letra==letras[x]){
        return true;
    }
    return false;
    }

function encontrarNif(nif){
    for(x=0;x<propietarios.length;x++){
        if(propietarios[x].nif==nif){
            return true;
        }
    }
    return false;
}
function desaparecer(){
   $("#textoToastError").empty();
   $("#capaToastError").fadeOut();
   $("#textoToastInfo").empty();
   $("#capaToastInfo").fadeOut();

}
//Fin bloque funcional
//bloque ingreso
$('#bIngresar').click(function(){ //mostrar
  esconderMenu();
    $("#ingreso").slideDown(200);
    $('#nifIngreso').val("");
    $('#passIngreso').val("");
    $('#nifIngreso').focus();
});

$("#confIngreso").click(function(){ //confirmar ingreso
    nif=$('#nifIngreso').val();
    pass=$('#passIngreso').val();
    nifEncontrado=false;
    passEncontrada=false;
    var y;
    for(x=0;x<usuarios.length;x++){
        if(nif==usuarios[x].nif){
            nifEncontrado=true;
           if(pass==usuarios[x].pass){ 
            passEncontrada=true;
            x=usuarios.length;
           }
        }
    }
    if(nifEncontrado){
        if(passEncontrada){
            $("#bEntradas").prop("disabled",false);
            $("#bSalidas").prop("disabled",false);
            $("#bAltas").prop("disabled",false);
            $('#bBajas').prop("disabled",false);
            $('#bIngresar').css("display","none");
            $("#textoToastInfo").append("Ingreso correcto");
            $("#capaToastInfo").show();
            setTimeout(desaparecer,3000);
            volverMenu();
        }else{
            $("#textoToastError").append("¡Contraseña incorrecta!");
            $('#passIngreso').val("");
            $('#passIngreso').focus();
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
        }
    }else{
        $("#textoToastError").append("¡Nif incorrecto!");
        $('#nifIngreso').val("");
        $('#passIngreso').val("");
        $('#nifIngreso').focus();
        $("#capaToastError").show();
        setTimeout(desaparecer,3000);
    }

});

//fin bloque ingreso
//bloque altas
$("#bAltas").click(function(){
   esconderMenu();
   mostrarAltas();
});
//alta Coche
$("#confAltasCoche").click(function(){
    vMatricula=$("#matricula").val();
    vMarca=$("#marca").val();
    vModelo=$("#modelo").val();
    vColor=$("#color").val();
    vNif=$("#nifPropietario").val();
    vParking=false;
    matriculaEncontrada=false;
    
    for(x=0;x<coches.length;x++){
        if(coches[x].matricula==vMatricula){
            matriculaEncontrada=true;
            x=coches.length;
        }
    }
    alert(vColor);
    
    if(!matriculaEncontrada){
        if(patronMatricula.test(vMatricula)){
                if(patronAlfaNumerico.test(vMarca)){
                    if(patronAlfaNumerico.test(vModelo)){
                        if(encontrarNif(vNif)){
                            coche=new Object();
                            coche={
                                'matricula': vMatricula,
                                'marca': vMarca,
                                'modelo': vModelo,
                                'color': vColor,
                                'nifPropietario': vNif,
                                'parking': vParking
                            }
                            coches.push(coche);
                            for(x=0;x<propietarios.length;x++){
                                if(propietarios[x].nif==vNif){
                                    propietarios[x].nVehiculos++;
                                }
                            }
                            $("#textoToastInfo").append("Coche registrado correctamente");
                            $("#capaToastInfo").show();
                            setTimeout(desaparecer,3000);
                            volverMenu();

                        }else{
                            var opcion=confirm("El propietario de este vehiculo no esta registrado, ¿Desea registrarlo?");
                            if(opcion){
                                $("#altasCoche").hide();
                                $("#altasPropietario").slideDown(300);
                                $("#nifAltaP").val(vNif);
                                $("#nombreAltaP").focus();
                            }else{
                                return;
                            }
                        }
                    }else{
                        $("#textoToastError").append("¡El patron del modelo es incorrecto!");
                        $("#modelo").val("");
                        $("#modelo").focus();
                        $("#capaToastError").show();
                        setTimeout(desaparecer,3000);
                    }
                }else{
                    $("#textoToastError").append("¡El patron de la marca es incorrecto!");
                    $("#marca").val("");
                    $("#marca").focus();
                    $("#capaToastError").show();
                    setTimeout(desaparecer,3000);
                }
        }else{
            $("#textoToastError").append("¡El patron de la matricula es incorrecto!");
            $("#matricula").val("");
            $("#matricula").focus();
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
        }
    }else{
        $("#textoToastError").append("¡Esta matricula ya esta registrada!");
        $("#matricula").val("");
        $("#matricula").focus();
        $("#capaToastError").show();
        setTimeout(desaparecer,3000);

    }



});
//fin alta coche
//alta propietario
    $("#confAltasPropietario").click(function(){
        vNif= $("#nifAltaP").val();
        vNombre= $("#nombreAltaP").val();
        vApel1= $("#apel1AltaP").val();
        vApel2= $("#apel2AltaP").val();
        vTlf= $("#tlfAltaP").val();
        vMail= $("#mailAltaP").val();
        vNVehiculos=0;

        if(!encontrarNif(vNif)){
            if(patronNif.test(vNif)){
            if(formatoNif(vNif)){
            if(patronAlfaNumerico.test(vNombre)){
                if(patronAlfaNumerico.test(vApel1)){
                    if(patronAlfaNumerico.test(vApel2)){
                        if(patronTlf.test(vTlf)){
                            if(patronMail.test(vMail)){
                                propietario=new Object();
                                propietario={
                                    'nif': vNif,
                                    'nombre': vNombre,
                                    'apel1': vApel1,
                                    'apel2': vApel2,
                                    'tlf': vTlf,
                                    'mail': vMail,
                                    'nVehiculos': vNVehiculos
                                }
                                propietarios.push(propietario);
                                $("#textoToastInfo").append("Propietario registrado correctamente");
                                $("#capaToastInfo").show();
                                setTimeout(desaparecer,3000);
                                $("#altasCoche").slideDown(200);
                                $("#altasPropietario").hide();

                            }else{
                                $("#textoToastError").append("¡El mail no es correcto!");
                                $("#mailAltaP").val("");
                                $("#mailAltaP").focus();
                                $("#capaToastError").show();
                                setTimeout(desaparecer,3000);
                            }
                        }else{
                        $("#textoToastError").append("¡El telefono no es correcto!");
                        $("#tlfAltaP").val("");
                        $("#tlfAltaP").focus();
                        $("#capaToastError").show();
                        setTimeout(desaparecer,3000);
                        }
                    }else{
                        $("#textoToastError").append("¡El segundo apellido no es correcto!");
                        $("#apel1AltaP").val("");
                        $("#apel1AltaP").focus();
                        $("#capaToastError").show();
                        setTimeout(desaparecer,3000);
                    }
                }else{
                $("#textoToastError").append("¡El primer apellido no es correcto!");
                $("#apel1AltaP").val("");
                $("#apel1AltaP").focus();
                $("#capaToastError").show();
                setTimeout(desaparecer,3000);
                }
            }else{
                $("#textoToastError").append("¡El nombre no es correcto!");
                $("#nombreAltaP").val("");
                $("#nombreAltaP").focus();
                $("#capaToastError").show();
                setTimeout(desaparecer,3000);
            }
        }else{
            $("#textoToastError").append("¡La letra no es correcta!");
            $("#nifAltaP").val("");
            $("#nifAltaP").focus();
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
            }
        }else{
            $("#textoToastError").append("¡El NIF introducido no es valido!");
            $("#nifAltaP").val("");
            $("#nifAltaP").focus();
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
            }
        }else{
            $("#textoToastError").append("¡El NIF introducido ya esta registrado!");
            $("#nifAltaP").val("");
            $("#nifAltaP").focus();
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
        }
    });
//fin alta propietario
//fin bloque altas
//bloque bajas
    $("#bBajas").click(function(){
        esconderMenu();
        $("#bajas").slideDown(200);
        $("#matriculaBaja").val("");
        $("#matriculaBaja").focus();
    });
    $("#confBajas").click(function(){
        matricula=$("#matriculaBaja").val();
        encontrado=false;
        var y,z;
        for(x=0;x<coches.length;x++){
            if(matricula==coches[x].matricula){
                y=x;
                encontrado=true;
                x=coches.length;
            }
        }
        if(encontrado){
            if(!coches[y].parking){
            var opcion=confirm("¿Estas seguro de dar de baja este coche?");
            if(opcion){
                for(x=0;x<propietarios.length;x++){
                    if(coches[y].nifPropietario==propietarios[x].nif){
                        z=x;
                        x=propietarios.length;
                    }
                }               
               
                
                if(propietarios[z].nVehiculos<2){
                    alert("El Propietario de este vehiculo no posee mas vehiculos, por lo tanto será dado de baja");
                    propietarios.splice(z,1);
                    coches.splice(y,1);
                    $("#textoToastInfo").append("Propietario y coche dados de baja.");
                    $("#capaToastInfo").show();
                    setTimeout(desaparecer,3000);
                }else{
                propietarios[z].nVehiculos--;
                coches.splice(y,1);
                $("#textoToastInfo").append("El coche ha sido dado de baja.");
                $("#capaToastInfo").show();
                setTimeout(desaparecer,3000);     
                }
                volverMenu();
            }else{
                return;
            }
        }else{
            $("#textoToastError").append("¡Este coche esta dentro del parking!");
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
        }
        }else{
            $("#textoToastError").append("¡Esta matricula no esta registrada!");
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
        }
    });


//fin bloque bajas
//bloque salidas
$("#bSalidas").click(function(){
    esconderMenu();
    $("#salidas").slideDown(200);
    $("#matriculaSalida").val("");
    $("#matriculaSalida").focus();
});

$("#confSalida").click(function(){
    matricula=$("#matriculaSalida").val();
    encontrado=false;
    var y;
    for(x=0;x<coches.length;x++){
        if(coches[x].matricula==matricula){
            y=x;
            encontrado=true;
            x=coches.length;
        }
    }
    if(encontrado){
        if(coches[y].parking){
            coches[y].parking=false;
            plazas++;
            $('#tContadorPlazas').empty();
            $('#tContadorPlazas').append("<b>"+plazas+"</b>");
            $("#textoToastInfo").append("El coche ha salido del parking.");
            $("#capaToastInfo").show();
            setTimeout(desaparecer,3000);
            volverMenu();
        }else{
            $("#textoToastError").append("¡Este coche no esta dentro del parking!");
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
        }
    }else{
        $("#textoToastError").append("¡Esta matricula no esta registrada!");
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
    }

});

//fin bloque salidas
//bloque entradas
$("#bEntradas").click(function(){
    esconderMenu();
    $("#entradas").slideDown(200);
    $("#matriculaEntrada").val("");
    $("#matriculaEntrada").focus();
});

$("#confEntrada").click(function(){
    matricula=$("#matriculaEntrada").val();
    encontrado=false;
    var y;
    for(x=0;x<coches.length;x++){
        if(coches[x].matricula==matricula){
            y=x;
            encontrado=true;
            x=coches.length;
        }
    }

    if(encontrado){
        if(!coches[y].parking){
            if(plazas>0){
            coches[y].parking=true;
            plazas--;
            $('#tContadorPlazas').empty();
            $('#tContadorPlazas').append("<b>"+plazas+"</b>");
            $("#textoToastInfo").append("El coche ha entrado en el parking.");
            $("#capaToastInfo").show();
            setTimeout(desaparecer,3000);
            volverMenu();
            }else{
                $("#textoToastError").append("¡No quedan plazas en el parking!");
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
            } 
        }else{
            $("#textoToastError").append("¡Este coche ya esta en el parking!");
            $("#capaToastError").show();
            setTimeout(desaparecer,3000);
        }
    }else{
        var opcion=confirm("Esta matricula no esta registrada. ¿Deseas registrarla?");
        if(opcion){
            mostrarAltas();
            $("#entradas").hide();
            $("#matricula").val(matricula);
            $("#marca").focus();
        }else{
            $("#matriculaEntrada").focus();
            return;
        }
    }
    


});
//fin bloque entradas
