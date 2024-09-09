
var desactivado=true;
var contadorGroup1=10;
var contadorGroup2=10;
var cVecesG1=0;
var cVecesG2=0;
var rojoG1=false;
var rojoG2=false;
var runing=false;
var semaforoLuzRojoG1=false;
var semaforoLuzVerdeG1=false;
var semaforoLuzAmbarG1=false;

var semaforoLuzRojoG2=false;
var semaforoLuzVerdeG2=false;
var semaforoLuzAmbarG2=false;
//cambios de luz semaforo g1
function cambioSemaforoG1(){
    if(semaforoLuzAmbarG1){
    $(".rojoGrupo1").css({background: "red"});
    $(".ambarGrupo1").css({background: "grey"});
    $(".verdeGrupo1").css({background: "grey"});
    semaforoLuzRojoG1=true;
    semaforoLuzVerdeG1=false;
    semaforoLuzAmbarG1=false;
    if(runing){
    rojoSG1=setTimeout(cambioSemaforoG1,10000);}else{apagar();}
    }else if(semaforoLuzVerdeG1){
    $(".rojoGrupo1").css({background: "grey"});
    $(".ambarGrupo1").css({background: "yellow"});
    $(".verdeGrupo1").css({background: "grey"});
    semaforoLuzRojoG1=false;
    semaforoLuzVerdeG1=false;
    semaforoLuzAmbarG1=true;
    if(runing){
    ambarSG1=setTimeout(cambioSemaforoG1,2000);}else{apagar();}
    }else if(semaforoLuzRojoG1){
        $(".rojoGrupo1").css({background: "grey"});
        $(".ambarGrupo1").css({background: "grey"});
        $(".verdeGrupo1").css({background: "green"});
        semaforoLuzRojoG1=false;
        semaforoLuzVerdeG1=true;
        semaforoLuzAmbarG1=false;
        if(runing){
        verdeSG1=setTimeout(cambioSemaforoG1,10000);}else{apagar();}
    }
    
}

//fin cambios de luz semaforo g1
//cambios de luz semaforo g2
function cambioSemaforoG2(){

    if(semaforoLuzAmbarG2){
        $(".rojoGrupo2").css({background: "red"});
        $(".ambarGrupo2").css({background: "grey"});
        $(".verdeGrupo2").css({background: "grey"});
        semaforoLuzRojoG2=true;
        semaforoLuzVerdeG2=false;
        semaforoLuzAmbarG2=false;
        if(runing){
        rojoSG2=setTimeout(cambioSemaforoG2,10000);}else{apagar();}
        }else if(semaforoLuzVerdeG2){
        $(".rojoGrupo2").css({background: "grey"});
        $(".ambarGrupo2").css({background: "yellow"});
        $(".verdeGrupo2").css({background: "grey"});
        semaforoLuzRojoG2=false;
        semaforoLuzVerdeG2=false;
        semaforoLuzAmbarG2=true;
        if(runing){
        ambarSG2=setTimeout(cambioSemaforoG2,2000);}else{apagar();}
        }else if(semaforoLuzRojoG2){
            $(".rojoGrupo2").css({background: "grey"});
            $(".ambarGrupo2").css({background: "grey"});
            $(".verdeGrupo2").css({background: "green"});
            semaforoLuzRojoG2=false;
            semaforoLuzVerdeG2=true;
            semaforoLuzAmbarG2=false;
            if(runing){
            verdeSG2=setTimeout(cambioSemaforoG2,10000);}else{apagar();}
        }
   
}
//fin cambios de luz semaforo g2
//contadores
function contG1(){

if(cVecesG1<2){
    $(".contadorG1").append(contadorGroup1);
if(contadorGroup1==0){
    if(rojoG1){   
        peatonVerdeG1();
     }else{
        peatonRojoG1();
    }
contadorGroup1=10;
$(".contadorG1").empty();
cVecesG1++;
if(runing){
contadorG1=setTimeout(contG1,1000);}else{apagar();}
}else{
    if(runing){
contadorGroup1-=1;
$(".contadorG1").empty();
$(".contadorG1").append(contadorGroup1);
if(contadorGroup1<=4 && !rojoG1 && contadorGroup1%2==0){
    $(".verdePGrupo1").css({display: "none"});
 }
 if(contadorGroup1<=4 && !rojoG1 && contadorGroup1%2==1){
     $(".verdePGrupo1").css({display: "block"});
 }
contadorG1=setTimeout(contG1,1000);}else{apagar();}
}
}else{
    peatonRojoG1();
    clearTimeout(contadorG1);
    contadorGroup1=10;
    cVecesG1=0;
    $(".botonPeaton").css({display: "block"});
    clearTimeout(rojoSG1);
    clearTimeout(ambarSG1);
    clearTimeout(verdeSG1);
}
}

function contG2(){

 if(cVecesG2<2){
    $(".contadorG2").append(contadorGroup2);
if(contadorGroup2==0){
    if(rojoG2){
        peatonVerdeG2();
        }else{
            peatonRojoG2();
        }
contadorGroup2=10;
$(".contadorG2").empty();
cVecesG2++;
if(runing){
contadorG2=setTimeout(contG2,1000);}else{apagar();}
}else{
    if(runing){
    contadorGroup2-=1;
$(".contadorG2").empty();
$(".contadorG2").append(contadorGroup2);
if(contadorGroup2<=4 && !rojoG2&&contadorGroup2%2==0){
   $(".verdePGrupo2").css({display: "none"});
}
if(contadorGroup2<=4 && !rojoG2&&contadorGroup2%2==1){
    $(".verdePGrupo2").css({display: "block"});
}
contadorG2=setTimeout(contG2,1000);}else{apagar();}
}
}else{
    peatonVerdeG2();
    clearTimeout(contadorG2);
    contadorGroup2=10;
    cVecesG2=0;
    $(".botonPeaton").css({display: "block"});
    clearTimeout(rojoSG2);
    clearTimeout(ambarSG2);
    clearTimeout(verdeSG2);
}
}
  
//apagar semaforos
function apagar(){
    $(".verdeGrupo1").css({background: "grey"});
    $(".rojoGrupo1").css({background: "grey"});
    $(".ambarGrupo1").css({background: "grey"});
    $(".ambarGrupo2").css({background: "grey"});
    $(".rojoGrupo2").css({background: "grey"});
    $(".verdeGrupo2").css({background: "grey"});
    //peatones
    $(".rojoPGrupo1").css({display: "none"});
    $(".verdePGrupo1").css({display: "none"});
    $(".rojoPGrupo2").css({display: "none"});
    $(".verdePGrupo2").css({display: "none"});
    //booleanos
     rojoG1=false;
     rojoG2=false;
     desactivado=true;
     contadorGroup1=10;
     contadorGroup2=10;
     runing=false;
     //botones
     $(".botonPeaton").css({display: "block"});
     $(".circuloBoton").prop("disabled", true);
     $("#on").prop("disabled", false);
     $("#off").prop("disabled", true);
     $(".contadorG1").empty();
     $(".contadorG2").empty();
     clearTimeout(rojoSG1);
     clearTimeout(ambarSG1);
     clearTimeout(verdeSG1);

     clearTimeout(rojoSG2);
     clearTimeout(ambarSG2);
     clearTimeout(verdeSG2);

     clearTimeout(cambiosG1);
     clearTimeout(cambiosG2);


}

//fin contadores
//cambios peatones g1
function peatonRojoG1(){
    $(".rojoPGrupo1").css({display: "block"});
    $(".verdePGrupo1").css({display: "none"});
    rojoG1=true;
}
function peatonVerdeG1(){
    $(".verdePGrupo1").css({display: "block"});
    $(".rojoPGrupo1").css({display: "none"});
    rojoG1=false;
}
//cambio peatones g2
function peatonRojoG2(){
    $(".rojoPGrupo2").css({display: "block"});
    $(".verdePGrupo2").css({display: "none"});
    rojoG2=true;
}
function peatonVerdeG2(){
    $(".verdePGrupo2").css({display: "block"});
    $(".rojoPGrupo2").css({display: "none"});
    rojoG2=false;
}
//fin peatones g2

//boton peatones g1
$(".bgrupo1").click(function(){
    runing=true;
    semaforoLuzVerdeG1=true;
    semaforoLuzRojoG2=true;
    cambiosG1=setTimeout(cambioSemaforoG1,10000);
    cambiosG2=setTimeout(cambioSemaforoG2,10000);
    peatonRojoG1();
    peatonVerdeG2();
    contG1();
    contG2();
    $(".botonPeaton").css({display: "none"});
   
});

//boton encendido
$("#on").click(function(){
    runing=true;
    $(".verdeGrupo1").css({background: "green"});
    $(".rojoGrupo2").css({background: "red"});

    $(".verdePGrupo2").css({display: "block"});
    $(".rojoPGrupo2").css({display: "none"});

    $(".rojoPGrupo1").css({display: "block"});
    $(".verdePGrupo1").css({display: "none"});

    $(".circuloBoton").prop("disabled", false);
    desactivado=false;
    $("#on").prop("disabled", true);
    $("#off").prop("disabled", false);


});
//boton apagado
$("#off").click(function(){
    
    apagar();

   

});
