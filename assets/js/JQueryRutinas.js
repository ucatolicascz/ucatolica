$(document).ready(function () {
    $("#selectall").click(function () {
         //alert("just for check");
         if (this.checked) {
             $('.checkboxall').each(function () {
                 this.checked = true;
             })
         } else {
             $('.checkboxall').each(function () {
                 this.checked = false;
             })
         }
    });
 
     $(".TipoCarne").click( function(){
         var idsec = $(this).attr("id").split("_")[1];
         if ($(this).is(':checked')) {
             $("#codigopx_" + idsec).prop("readonly", false);
             $("#codigopx_" + idsec).removeClass("disabled");
         }
         else {
             $("#codigopx_" + idsec).prop("readonly", true);
             $("#codigopx_" + idsec).addClass("disabled");
         }
     });
 
     $("#llena2").click(function () {
        $("#BotonP2").remove();
     });
     $("#llena3").click(function () {
         $("#BotonP2").remove();
     });
     $("#mes").change(function () {
         if (this.value == "100") {
             $("#BotonP2").remove();
         }
     });
 
     $('.Grabar').click(function (e) {
    // e.preventDefault();
     var Nomb = $('#Nomb').val();
     var appat = $('#appat').val();
     var DocId = $('#DocId').val();
     var Direc = $('#Direc').val();
     var cel = $('#cel').val();
     var em = $('#em').val();
     var TipoDoc = $('#TipoDoc').val();
  
     $(".error").remove();
  
     if (Nomb.length < 1) {
         $('#Nomb').after('<span class="error">Valor Requerido: Nombres</span>');
         return false;
     }
     if (appat.length < 1) {
         $('#appat').after('<span class="error">Valor Requerido: Primer apellido</span>');
         return false;
     }
     if (DocId.length < 1) {
         $('#DocId').after('<span class="error">Valor Requerido: Documento de Identidad</span>');
         return false;
     }
     if (Direc.length < 1) {
         $('#Direc').after('<span class="error">Valor Requerido: Dirección</span>');
         return false;
     }
     if (cel.length < 1) {
         $('#cel').after('<span class="error">Valor Requerido: Celular</span>');
         return false;
     }
     if (em.length < 1) {
         $('#em').after('<span class="error">Valor Requerido: Email</span>');
         return false;
     }
     if (TipoDoc == 1) {
         var LugEmi = $('#LugEmi').val();
         if (parseInt(LugEmi) < 1) {
             $('#LugEmi').after('<span class="error">Valor Requerido : Ligar de Emisión</span>');
             return false;
         }
     }
     $("#formularioz").submit();
   });
 
   $(".Tipo").on( "click", function (){
       $(".Tipo").each(function (){
           if($(this).is(':checked')){
              var tipo = "." + $(this).val();   
              $(tipo).addClass($(this).val() + "1").removeClass($(this).val());
           }
           else{
               var tipo = "." + $(this).val() + "1";   
              $(tipo).addClass($(this).val()).removeClass($(this).val()+ "1");
           };
       });
   });
 
 
 });