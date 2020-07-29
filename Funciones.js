function Con_A_Decimal(decimal,base){
    //Esta funcion combierte cualquier numero en otra base a decimal 
    // ejemplo1: un binario es base 2  Con_A_Decimal(100110,2)
    // ejemplo2: un hexadecimal es base 16  Con_A_Decimal('F4A9',16)
    var str = (''+decimal);
    var res = 0;
    var hex = {'A':10,'B':11,'C':12,'D':13,'E':14,'F':15};
    for(var x = 0; x < str.length; x++){
        var aux= str.substr(-1*(x+1),1);
        if(isNaN(aux)){
            aux = hex[aux.toUpperCase()];
        }
        res += Math.pow(base,x)*parseInt(aux);
    }
<<<<<<< HEAD
    console.log(res);
    return res;
}



function consultarYO(){

    var cedula = "402-2517884-3";

    if (cedula.length == 13 && cedula != "" && cedula !="___-_______-_"){

    $.ajax({

       type:"POST",

       dataType:"html",

       url:"https://www.lanzate.com.do/formLanzate/inc/consultas_miembros.php",

       data: "padron=true&cedula="+cedula,

       success: function(resp){//document.write(resp);

           $('#cedula_v').val(cedula);

           json = $.parseJSON(resp);

           

           var i = 0;
           console.log(json[i]);
           {//inicio for

               var NombreMiembro = json[i].Nombre;

               var recinto_e = json[i].Recinto;

               var colegio_e = json[i].Colegio;

               var FechaNacimiento = json[i].Nacimiento;

               var Genero = json[i].Sexo;

               var idprovincia = json[i].id_provincia

               var idmunicipio = json[i].id_municipio

               var provincia = json[i].Provincia

               var municipio = json[i].Municipio

               var direccion_recinto = json[i].DireccionRecinto

               var sector_paraje = json[i].Sector

               var codigoRecintoE = json[i].CodigoRecinto_e

           }//final for

           $(document).ready(function() {

               $(".nombre").val(NombreMiembro).attr('readonly', true);

               $(".recinto").val(recinto_e).attr('readonly', true);

               $(".colegio-electoral").val(colegio_e).attr('readonly', true);

               $(".nacimiento").val(FechaNacimiento);

               $(".sexo").val(Genero);

               $(".id_provincia").val(idprovincia);

               $(".id_municipio").val(idmunicipio);

               $(".Provincia").val(provincia);

               $(".Municipio").val(municipio);

               $(".DireccionRecinto").val(direccion_recinto);

               $(".Sector").val(sector_paraje);

               $(".CodigoRecinto_e").val(codigoRecintoE);

               // $("[name=fullname]").val(nombreComp);

               // $("#nivel option[value="+nivel+"]").attr('selected', true);

               // $("[name=register]").attr('onClick','editar_usuarios('+idusuario+');');

               // $("[name=register]").attr('value','Guardar');

               if(resp != 2){

                   $('.registro_miembro').fadeIn(300).css("display", "flex");

                   $('.validar_miembro').fadeOut(300);

                   $('.show_error').fadeIn(300).css("display", "none");

               }else{

                   $('.show_error').fadeIn(300).css("display", "flex");

               }

               // When clicking on the button close or the mask layer the popup closed

           });

       }//final function con variable resp

   });

}else{

    alert('Digite su cédula');

}

}
=======
    console.log(res)
}
>>>>>>> 9d36a0aa2d8ab5b07c238475c416be4b167fd9d7
