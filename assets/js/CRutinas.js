// Desarrollador: Anthony Ortuño Vasquez
//if (top.location != location) top.location = self.location;
// bSupportsDHTML = true para Internet Explorer 4 o mayor
var bDoesDHTML = ( (navigator.userAgent.indexOf("MSIE") >= 0) &&
                   (navigator.appVersion.substring(0,1) >= 4) )

// items de menu si browser soporta DHTML
if(bDoesDHTML){document.write("<STYLE>.off{display:none}</STYLE>")}

//function doSection(secNum){
function Corte(secNum){
  if (bDoesDHTML){
    if (secNum.className=="off"){secNum.className="on"} 
    else{secNum.className="off"}
  }
}

function click() {
 if (event.button==2){
   //alert('Lo lamentamos acabamos de inhabilitar el Boton derecho del mouse para esta Pagina...')
 }
}
document.onmousedown=click;

 
var Mensaje = "Bienvenido al Sistema de Información remoto de la Universidad Católica Boliviana!!!.";



var sitio=1;

function scrollIn() {
	window.status=Mensaje.substring(0, sitio);
	if (sitio >= Mensaje.length) {
		sitio=1;
		window.setTimeout("scrollOut()",400); 
	} else {
		sitio++;
		window.setTimeout("scrollIn()",75); 
		}
	}
function scrollOut() {
	window.status=Mensaje.substring(sitio, Mensaje.length);
	if (sitio >= Mensaje.length) {
		sitio=1;
		window.setTimeout("scrollIn()", 150);
	} else {
		sitio++;
		window.setTimeout("scrollOut()", 75);
		}
	} 
	
var current = 0
var x = 0
var speed = 50
var speed2 = 3000

function initArray(n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '
  }
}

typ = new initArray(11)
typ[0]  ="• Bienvenido al Sistema de Información remoto de la Universidad Católica Boliviana!!!.... "
typ[1]  ="• Procedimientos y pasos que debes sequir para inscribirte, hacer convalidación de materias  ....."
typ[2]  ="• Podras obtener consulta de tus notas , deudas pendientes , horario de clases....."
typ[3]  ="• Noticias actuales sobre la Universidad,el departamento y el mundo....."
typ[4]  ="• Busquedas en las páginas publicadas por el CSI y Busquedas en páginas externas......"
typ[5]  ="• Traspasos, Homologaciones, cursos......"
typ[6]  ="• Información Estadistica....."
typ[7]  ="• Que sucedio en la historia un dia como hoy....."
typ[8]  ="• Datos de la cotización del dolar....."
typ[9]  ="• Datos del Tiempo......"
typ[10] ="• Trucos y novedades de windows y otros programas de uso frecuente.... "

function typewrite() {
var m = typ[current]

window.status = m.substring(0, x++) + "•"

if (x == m.length + 1) {
x = 0
current++

if (current > typ.length - 1) {
current = 0
}

setTimeout("typewrite()", speed2)
}

else {
setTimeout("typewrite()", speed)
}
}

typewrite()


function makeArray(m)
{
  this.length = m;
  for (i=1;i<=m;i++)
  {
    this[i]=0;
  }
  return this;
}
function displayDate() {
    var Mes = new makeArray(12);
    var Dias = new makeArray(7);
    Mes[0]  = "Enero";
    Mes[1]  = "Febrero";
    Mes[2]  = "Marzo";
    Mes[3]  = "Abril";
    Mes[4]  = "Mayo";
    Mes[5]  = "Junio";
    Mes[6]  = "Julio";
    Mes[7]  = "Agosto";
    Mes[8]  = "Septiembre";
    Mes[9]  = "Octubre";
    Mes[10] = "Noviembre";
    Mes[11] = "Diciembre";
    
    Dias[0]= "Domingo";
    Dias[1]= "Lunes";
    Dias[2]= "Martes";
    Dias[3]= "Miércoles";
    Dias[4]= "Jueves";
    Dias[5]= "Viernes";
    Dias[6]= "Sabado";
	var hoy = new Date();
	var fecha   = hoy.getDate();
	var dia   = hoy.getDay();
	var Mess = hoy.getMonth();
	var anio  = hoy.getYear();
	if (anio < 100){
		anio += 1900;
	}
  return("  "+Dias[dia]+" , "+fecha+" de "+Mes[Mess]+" de "+ anio);
}


  function validacion(formulario) {
  // Desarrollador: Anthony Ortuño Vasquez
	var er_nombre = /(^([a-z]|[A-Z]|á|é|í|ó|ú|ñ|ü|\s|\.|-)+|^)$/	//letras, '.' y '-' o vacio
	var er_email = /(^(.+\@.+\..+)|^)$/		//direccion de correo electronico o vacio
	var er_url = /(^(.+\www.+\..+)|^)$/		//direccion de correo electronico o vacio
	//comprueba campo de nombre

	if(!er_nombre.test(formulario.nombre.value)) { 
	 alert('Contenido del campo NOMBRE no válido.');
	 formulario.nombre.focus();
	 formulario.nombre.select();
	 return false;
	}
	else
	{ if(!er_email.test(formulario.email.value)) { 
 		alert('Contenido del campo E-MAIL no válido.')
    	formulario.email.focus();
	    formulario.email.select();
		return false;
 	  }   	
	  else
  	  {if(!er_url.test(formulario.url.value)) { 
		alert('Contenido del campo URL no válido.')
        formulario.url.focus();
	    formulario.url.select();
		return false;
       }   	
	   else
       {
	    return true;
	   }
	  }  
	}  
  }

function Callong(formulario) {
  maxLength = 250
  maxLength1 = 200
  if (formulario.Comentario.value.length > maxLength) {
    formulario.Comentario.value = formulario.Comentario.value.substring(0,maxLength)
    charleft = 0
  } 
  else
  {
    charleft = maxLength - formulario.Comentario.value.length
  }

  formulario.Caracteres.value = charleft

  if (formulario.textarea2.value.length > maxLength1) {
    formulario.textarea2.value = formulario.textarea2.value.substring(0,maxLength1)
    charleft1 = 0
  } 
  else
  {
    charleft1 = maxLength1 - formulario.textarea2.value.length
  }

  formulario.Caracteres1.value = charleft1
}

function ContarCar(f) {
  supportsKeys = true
  Callong(f)
}


  function validar(formulario) {
  // Desarrollador: Anthony Ortuño Vasquez
	var er_nombre = /(^([a-z]|[A-Z]|á|é|í|ó|ú|ñ|ü|\s|\.|-)+|^)$/	//letras, '.' y '-' o vacio
	//comprueba campo de nombre
   	if(!er_nombre.test(formulario.vb.value)||formulario.vb.value=='') { 
	 alert('El patrón de búsqueda no es válido.');
	 formulario.vb.focus();
	 formulario.vb.select();
	 return false;
	}
	else
	{return true;	 
	}  
  }

function fullscreen() {
  window.open( document.location.href, 'full', 'fullscreen=1' )
}

function normalscreen() {
if ( opener && !opener.closed ) {
  opener.document.location.href = document.location.href
  opener.focus()
}
window.close()
}

function Ventana(URL,Nombre,Flags) { 
  window.open(URL,Nombre,Flags);
}

function siono()
{
 if (!confirm("AVISO: ¿Deseas entrar a este sitio?"))
   history.go(-1)
 return " "
}

function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   myfield.form.submit();
   return false;
   }
else
   return true;
}

function window_onload() 
{
  document.formularioz.text1.focus();
  document.formularioz.text1.value =""
  document.formularioz.text1.select();
  return;
}

function mOvr(src,clrOver) {
    if (!src.contains(event.fromElement)) {
	  //src.style.cursor = 'hand';
	  src.bgColor = clrOver;
	}
  }
  function mOut(src,clrIn) {
	if (!src.contains(event.toElement)) {
	 // src.style.cursor = 'default';
	  src.bgColor = clrIn;
	}
  }
  function mClk(src) {
    if(event.srcElement.tagName=='TD'){
	  src.children.tags('A')[0].click();
    }
  }


function Publicidad() {
  window.open('/imagenes/publicidad.asp','','width=500,height=700,toolbar=no,menubar=no,status=no,scrollbars=no,resizable=no')
}

function EncuestaUCBSCZ() {
  window.open('/portal/encuesta.asp','','width=600,height=720,toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=no')
}

function Borracontenidos() {
  for (i=0;i<Cuerpoinicial.length;i++)
  {
    if(Cuerpoinicial(i).style.display=="none")
      Cuerpoinicial(i).style.display="";
    else
      Cuerpoinicial(i).style.display="none";
  }
  for (i=0;i<Cuerpoimprimir.length;i++)
  { 
    if(Cuerpoimprimir(i).style.display=="none")
      Cuerpoimprimir(i).style.display="";
    else
      Cuerpoimprimir(i).style.display="none";
  }
  
  return true;
}


function Borracontenidos1() {
  for (i=0;i<Cuerpoinicial1.length;i++)
  {
    if(Cuerpoinicial1(i).style.display=="none")
      Cuerpoinicial1(i).style.display="";
    else
      Cuerpoinicial1(i).style.display="none";
  }
  for (i=0;i<Cuerpoimprimir1.length;i++)
  { 
    if(Cuerpoimprimir1(i).style.display=="none")
      Cuerpoimprimir1(i).style.display="";
    else
      Cuerpoimprimir1(i).style.display="none";
  }
  return true;
}

function Borracontenidos2() {
  for (i=0;i<Cuerpoinicial2.length;i++)
  {
    if(Cuerpoinicial2(i).style.display=="none")
      Cuerpoinicial2(i).style.display="";
    else
      Cuerpoinicial2(i).style.display="none";
  }
  for (i=0;i<Cuerpoimprimir2.length;i++)
  { 
    if(Cuerpoimprimir2(i).style.display=="none")
      Cuerpoimprimir2(i).style.display="";
    else
      Cuerpoimprimir2(i).style.display="none";
  }
  return true;
}

function Borracontenidos3() {
  for (i=0;i<Cuerpoinicial3.length;i++)
  {
    if(Cuerpoinicial3(i).style.display=="none")
      Cuerpoinicial3(i).style.display="";
    else
      Cuerpoinicial3(i).style.display="none";
  }
  for (i=0;i<Cuerpoimprimir3.length;i++)
  { 
    if(Cuerpoimprimir3(i).style.display=="none")
      Cuerpoimprimir3(i).style.display="";
    else
      Cuerpoimprimir3(i).style.display="none";
  }
  return true;
}

function Borracontenidos4() {
  for (i=0;i<Cuerpoinicial4.length;i++)
  {
    if(Cuerpoinicial4(i).style.display=="none")
      Cuerpoinicial4(i).style.display="";
    else
      Cuerpoinicial4(i).style.display="none";
  }
  for (i=0;i<Cuerpoimprimir4.length;i++)
  { 
    if(Cuerpoimprimir4(i).style.display=="none")
      Cuerpoimprimir4(i).style.display="";
    else
      Cuerpoimprimir4(i).style.display="none";
  }
  return true;
}

function Borracontenidos5() {
  for (i=0;i<Cuerpoinicial5.length;i++)
  {
    if(Cuerpoinicial5(i).style.display=="none")
      Cuerpoinicial5(i).style.display="";
    else
      Cuerpoinicial5(i).style.display="none";
  }
  for (i=0;i<Cuerpoimprimir5.length;i++)
  { 
    if(Cuerpoimprimir5(i).style.display=="none")
      Cuerpoimprimir5(i).style.display="";
    else
      Cuerpoimprimir5(i).style.display="none";
  }
  return true;
}

function agregar_Favoritos() {
 if (navigator.appVersion.indexOf("MSIE") > 0)
	{var Loc;
	Loc='https://csi.scz.ucb.edu.bo';
	window.external.AddFavorite(Loc, 'Universidad Católica Boliviana San Pablo');}	
 else
	{window.open('Pagina_favorito.asp','','location=no,,width=600,height=570');}
}

function agregar_Inicio() {
  if (navigator.appVersion.indexOf("MSIE") > 0) 
	{document.body.style.behavior="url(#default#homepage)";
	 document.body.setHomePage("https://csi.scz.ucb.edu.bo");}	
  else
	{window.open('Pagina_Inicio.asp','','location=no,width=750,height=600,scrollbars=yes');} 
}



function fn(form,field)
{
var next=0, found=false
var f=form
if(event.keyCode!=13) return;
for(var i=0;i<f.length;i++)	{
	if(field.name==f.item(i).name){
		next=i+1;
		found=true
		break;
	}
}
while(found){
	if( f.item(next).disabled==false &&  f.item(next).type!='hidden'){
		f.item(next).focus();
		break;
	}
	else{
		if(next<f.length-1)
			next=next+1;
		else
			break;
	}
}
}

function BorraObjetos() {
  for (i=0;i<ObjIni.length;i++)
  {
    if(ObjIni(i).style.display=="none")
      ObjIni(i).style.display="";
    else
      ObjIni(i).style.display="none";
  }
  for (i=0;i<ObjMos.length;i++)
  { 
    if(ObjMos(i).style.display=="none")
      ObjMos(i).style.display="";
    else
      ObjMos(i).style.display="none";
  }
  return true;
}

function verificacionvalor60(obj,valor)
{ if (obj != valor){
   alert("Por favor ingresa un valor entre 0 y " + valor);
   return (false);}
  return (true);
}

function verificacionvalor40(obj,valor)
{ //if (obj >= 0 && obj <= valor)
  if (obj > valor){
   alert("Por favor ingresa un valor entre 0 y " + valor);
   return (false);}
  return (true);
}

function verificavalor0100(formulario)
{ if (formulario.DescN.value.length < 4)
  { alert("Por favor ingresa un valor valido para el campo (DESCRIPCION)");
    formulario.DescN.focus();
    return (false);
  }

  if (formulario.valorN.value.length < 1)
  {alert("Por favor ingresa un valor entre 0 y 100 para el campo");
   formulario.valorN.focus();
   return (false);}
  else
  {if (formulario.valorN.value < 0)
   {alert("Por favor ingresar un valor entre 0 y 100 para el campo");
    formulario.valorN.focus();
    return (false);}
   else{
     if ((formulario.valorN.value>100))
       {alert("Por favor ingresar un valor entre 0 y 100 para el campo");
        formulario.valorN.focus();
        formulario.valorN.value = 0
        return (false);}
       }
     }

 if (formulario.FechaP.value.length < 4)
  { alert("Por favor ingresa un valor valido para el campo (FECHA)");
    formulario.FechaP.focus();
    return (false);
  }
     
  return (true);
}


function verificavalor060(formulario)
{ if (formulario.DescN.value.length < 4)
  { alert("Por favor ingresa un valor valido para el campo (DESCRIPCION)");
    formulario.DescN.focus();
    return (false);
  }

  if (formulario.valorN.value.length < 1)
  {alert("Por favor ingresa 60 para el campo");
   formulario.valorN.focus();
   return (false);}
  else
  {if (formulario.valorN.value < 0)
   {alert("Por favor ingresar 60 para el campo");
    formulario.valorN.focus();
    return (false);}
   else{
     if (!(formulario.valorN.value==60))
       {alert("Por favor ingresar  60 para el campo");
        formulario.valorN.focus();
        formulario.valorN.value = 60
        return (false);}
       }
     }

 if (formulario.FechaP.value.length < 4)
  { alert("Por favor ingresa un valor valido para el campo (FECHA)");
    formulario.FechaP.focus();
    return (false);
  }
     
  return (true);
}

function verificavalor040(formulario)
{ if (formulario.DescN.value.length < 4)
  { alert("Por favor ingresa un valor valido para el campo (DESCRIPCION)");
    formulario.DescN.focus();
    return (false);
  }

  if (formulario.valorN.value.length < 1)
  {alert("Por favor ingresa un valor 0 y 40 para el campo");
   formulario.valorN.focus();
   return (false);}
  else
  {if (formulario.valorN.value <= 0)
   {alert("Por favor ingresa un valor  0 y 40 para el campo");
    formulario.valorN.focus();
    return (false);}
   else{
     if (formulario.valorN.value > 40)
       {alert("Por favor ingresa un valor  0 y 40 para el campo");
        formulario.valorN.focus();
        return (false);}}}

 if (formulario.FechaP.value.length < 4)
  { alert("Por favor ingresa un valor valido para el campo (FECHA)");
    formulario.FechaP.focus();
    return (false);
  }
     
  return (true);
}

   function CheckAll()
   {
      for (var i=0;i<document.formularioz.elements.length;i++)
      {
         var e = document.formularioz.elements[i];
         if (e.type == 'checkbox' && e.name != 'allbox')
            e.checked = document.formularioz.allbox.checked;
      }
  }

  function SelectAll2(ddd) {
   var checkboxes = document.getElementsByTagName("input");
   var nombrex = 'allbox' + ddd;
   var estadoactual = false;
   for (i = 0; i < checkboxes.length; i++) {

       if (checkboxes.item(i).attributes["type"].value == "checkbox") {

           if (checkboxes.item(i).attributes["name"].value == nombrex) {
               estadoactual = checkboxes.item(i).checked; 
           }
               var nombre = checkboxes.item(i).attributes["name"].value;
               nombre = nombre.substring(nombre.length - 4, nombre.length)
               if (nombre == ddd) {
                   checkboxes.item(i).checked = estadoactual;
               }
       } 
   }

}

function SelectPadre2(ddd) {
    var checkboxes = document.getElementsByTagName("input");
    var estadoactual = false;
    var nombre = 'allbox' + ddd;

    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes.item(i).attributes["type"].value == "checkbox") {
            if (nombre != checkboxes.item(i).attributes["name"].value) {
                var nombre2 = checkboxes.item(i).attributes["name"].value;
                nombre2 = nombre2.substring(nombre2.length - 4, nombre2.length);
                if (nombre2 == ddd) {
                    if (checkboxes.item(i).checked == true) {
                        estadoactual = checkboxes.item(i).checked;
                    }
                }
                
            }                 
        }
    }

    for (i = 0; i < checkboxes.length; i++) { // RECORDAR QUE EL TYPE DE OBJETO NO ES EL MISMO DEL ID
        if (checkboxes.item(i).attributes["type"].value == "checkbox") {
            if (nombre == checkboxes.item(i).attributes["name"].value) {
                checkboxes.item(i).checked = estadoactual;
            } 
        }
    }
    
}
  
  
  function OpConfirm(text, conf) {
   
      for (var i=0;i<document.formularioz.elements.length;i++)
      {
         var e = document.formularioz.elements[i];
         if (e.type == 'checkbox' && e.name != 'allbox' && e.checked == 1 ) {
            if (conf) {
               return confirm(text);
            } else {
               return 1;
            }
         }
      }
      return false;
   }


//_editor_url = "https://csi.scz.ucb.edu.bo/informaciones/Editor/";                     // URL to htmlarea files
// var win_ie_ver = parseFloat(navigator.appVersion.split("MSIE")[1]);
// if (navigator.userAgent.indexOf('Mac')        >= 0) { win_ie_ver = 0; }
// if (navigator.userAgent.indexOf('Windows CE') >= 0) { win_ie_ver = 0; }
// if (navigator.userAgent.indexOf('Opera')      >= 0) { win_ie_ver = 0; }
// if (win_ie_ver >= 5.5) {
//   document.write('<scr' + 'ipt src="' +_editor_url+ 'editor.js"');
//   document.write(' language="Javascript1.2"></scr' + 'ipt>');  
// } else { document.write('<scr'+'ipt>function editor_generate() { return false; }</scr'+'ipt>'); }


function navegar(direccion, nueva_ventana){
	if(direccion.toLowerCase().substring(0,3) == "www")
		direccion = "http://" + direccion
	if(direccion != ""){
		if (nueva_ventana)
			window.open(direccion);
		else
			location.href = direccion;
	}
}

function previewimage(form,path) { 
if (path!= '') { 
document.preview.src=path; 
} 
} 

function FSfncCheckTime(FormField) {
	// CheckTime se suministra en formato horario de 24 horas (hh:mm).
    // Implemente añadiendo un controlador de eventos onSubmit al FORM o un controlador de eventos onBlur a un elemento INPUT, por ejemplo, onBlur="FSfncCheckTime(this)".
    var hora = FormField.value;

    if (hora.length > 0 && hora.length == 5) {
        if (FormField.value.indexOf(":") == -1) { alert(" no es una hora válida ingrese el formato 00:00"); FormField.focus(); return false } // FormField.focus(); return false}
	    var ArrayTime = FormField.value.split(":");
	    if ((ArrayTime.length != 2) || (isNaN(ArrayTime[0])) || (ArrayTime[0] == "") || (isNaN(ArrayTime[1])) || (ArrayTime[1] == "")) { alert( " no es una hora válida"); FormField.focus(); return false }
	    if ((parseInt(ArrayTime[0], 10) < 0) || (parseInt(ArrayTime[0], 10) > 23) || (parseInt(ArrayTime[1], 10) < 0) || (parseInt(ArrayTime[1], 10) > 59)) { alert(" no es una hora válida"); FormField.focus(); return false }
	    return true;
	}
	alert(" no es una hora válida ingrese el formato 00:00");
	FormField.focus();
	return false;
	}

function FSfncCheckDateFormat(FormField,FormatMode) {
	// CheckDate suministrada es válida. FormatMode es opcional, si no se suministra tendrá el valor 1 por defecto (1=dd/mm/aaaa, 0=mm/dd/aaaa).
	// Implemente añadiendo un controlador de eventos onSubmit al FORM o un controlador de eventos onBlur a un elemento INPUT, por ejemplo, onBlur="FSfncCheckDateFormat(this,0)".
	if (FormatMode!=0) {FormatMode=1}
	var fecha = FormField.value
	if (fecha.length>0){
	if (FormField.value.indexOf("/") == -1) { alert(FormField.title + " no es una fecha válida ingrese el formato 00/00/0000 -0"); FormField.focus(); FormField.select(); return false }
	var ArrayDate = FormField.value.split("/");
	if ((ArrayDate.length != 3) || (isNaN(ArrayDate[0])) || (ArrayDate[0] == "") || (isNaN(ArrayDate[1])) || (ArrayDate[1] == "") || (isNaN(ArrayDate[2])) || (ArrayDate[2] == "")) { alert(FormField.title + " no es una fecha válida"); FormField.focus(); FormField.select(); return false }
	var daysInMonth = new Array(0,31,29,31,30,31,30,31,31,30,31,30,31);
	if ((parseInt(ArrayDate[1 - FormatMode], 10) < 1) || (parseInt(ArrayDate[1 - FormatMode], 10) > daysInMonth[parseInt(ArrayDate[0 + FormatMode], 10)])) { alert(FormField.title + " no es una fecha válida ingrese el formato 00/00/0000 -1 "); FormField.focus(); FormField.select(); return false}
	if ((parseInt(ArrayDate[0 + FormatMode], 10) == 2) && (parseInt(ArrayDate[1 - FormatMode], 10) > FSfncDaysInFebruary(parseInt(ArrayDate[2], 10)))) { alert(FormField.title + " no es una fecha válida ingrese el formato 00/00/0000 -2"); FormField.focus(); FormField.select(); return false}
	if ((parseInt(ArrayDate[0 + FormatMode], 10) < 1) || (parseInt(ArrayDate[0 + FormatMode], 10) > 12)) { alert(FormField.title + " no es una fecha válida ingrese el formato 00/00/0000 -3"); FormField.focus(); FormField.select(); return false}
	return true;
	}
	return false;
}

function go()
{
	box = document.forms[0].semestre;
	destination = box.options[box.selectedIndex].value;
	if (destination) location.href = destination;
}

function go2()
{
	box = document.forms[0].gestion;
	destination = box.options[box.selectedIndex].value;
	if (destination) location.href = destination;
}

function go3()
{
	box = document.forms[0].Super;
	destination = box.options[box.selectedIndex].value;
	if (destination) location.href = destination;
}

function go4()
{
	box = document.forms[0].Mgestion;
	destination = box.options[box.selectedIndex].value;
	if (destination) location.href = destination;
}

function go5(box)
{
	destination = box.options[box.selectedIndex].value;
	if (destination!=-1){
	if (destination) location.href = destination;}
}

function go6()
{
	box = document.forms[0].Pensum;
	destination = box.options[box.selectedIndex].value;
	if (destination) location.href = destination;
}

function go7(box)
{
	destination = box.options[box.selectedIndex].value;
	if (destination!=-1)
	{
	 if (destination) location.href = destination;
	}
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function funcionhh(v){
    v=v.replace(/\D/g,"")                           //Remueve lo que no es digito
    v=v.replace(/^(\d{2})(\d)/,"$1:$2")             //Coloca dos punto entre en 3 y 4 digito
    return v
}

function mostrarOcultarTablas(id){
mostrado=0;
elem = document.getElementById(id);
if(elem.style.display=='block')mostrado=1;
elem.style.display='none';
if(mostrado!=1)elem.style.display='block';
}

function SubSiteMsgChecks(objName) {
  if(document.getElementById(objName)){
   document.getElementById(objName).checked =(document.getElementById(objName).checked?false:true);
  } 
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function funcionhh(v){
    v=v.replace(/\D/g,"")                           //Remueve lo que no es digito
    v=v.replace(/^(\d{2})(\d)/,"$1:$2")             //Coloca dos punto entre en 3 y 4 digito
    return v
}

function mostrarOcultarTablas(id){
mostrado=0;
elem = document.getElementById(id);
if(elem.style.display=='block')mostrado=1;
elem.style.display='none';
if(mostrado!=1)elem.style.display='block';
}

function SubSiteMsgChecks(objName) {
  if(document.getElementById(objName)){
   document.getElementById(objName).checked =(document.getElementById(objName).checked?false:true);
  } 
}

function mostrar_ocultar(hide)
{
 if (document.layers)
  {
   document.contenido.visibility = hide ? 'hide' : 'show';
   document.contenido.height=0;
  }
 else
  {
   var g = document.all ? document.all.contenido :
   document.getElementById('contenido');
   g.style.visibility = hide ? 'hidden' : 'visible';
   g.style.height=0;
  }
}

function imprSelec(nombre)
{
    var gAutoPrint = true;


        if (document.getElementById != null){
            var html = '<HTML>\n<HEAD>\n';
            if (document.getElementsByTagName != null){
                var headTags = document.head || document.getElementsByTagName("head");
                if (headTags.length > 0) html += headTags[0].innerHTML;
            }
            html += '\n</HE' + 'AD>\n<BODY>\n';
            var printReadyElem = document.getElementById(nombre);
            if (printReadyElem != null) html += printReadyElem.innerHTML;
            else{
                alert("Error, No  hay Contenido.");
                return;
            }
            html += '\n</BO' + 'DY>\n</HT' + 'ML>';
            var printWin = window.open("","Impresión");
            printWin.document.open();
            printWin.document.write(html);
            printWin.document.close();
            if (gAutoPrint) printWin.print();
            //printWin.close();
            setTimeout(function () { printWin.close(); }, 1000);
        } else alert("Navegador No soportado.");
}


function write_to_excel() 
{
str="";
var mytable = document.getElementById("MyTable");
//var mytable = document.getElementsByTagName("table")[0];
var rowCount = mytable.rows.length;
var colCount = mytable.getElementsByTagName("tr")[0].getElementsByTagName("td").length; 

var ExcelApp = new ActiveXObject("Excel.Application");
var ExcelSheet = new ActiveXObject("Excel.Sheet");
ExcelSheet.Application.Visible = false;

 for(var i=0; i<rowCount; i++) 
 { 
  for(var j=0; j<colCount; j++) 
  {   
   str= mytable.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML;
   ExcelSheet.ActiveSheet.Cells(i+1,j+1).Value = str;
  }
 }
}

String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");}

function exportToXL(eSrc) 
{
  var oExcel; 
  var oExcelSheet; 
  var oWkBooks;
  var cols; 
  oExcel = new ActiveXObject('Excel.Application');
  oWkBooks = oExcel.Workbooks.Add;
  oExcelSheet = oWkBooks.Worksheets(1);
  oExcelSheet.Activate();
  if (eSrc.tagName != 'TABLE') {
   alert('No ha sido posible exportar la tabla a excell');
   return false; 
  }
  cols = Math.ceil(eSrc.cells.length / eSrc.rows.length);
  for (var i = 0; i < eSrc.cells.length; i ++)
   {
    var c, r;
    r = Math.ceil((i+1) / cols);
    c = (i+1)-((r-1)*cols)
    if (eSrc.cells(i).tagName == 'TH') { 
     oExcel.ActiveSheet.Cells(r,c).Font.Bold = true;
     oExcel.ActiveSheet.Cells(r,c).Interior.Color = 14474460; 
    }
    if (eSrc.cells(i).childNodes.length > 0 && eSrc.cells(i).childNodes(0).tagName == "B") 
      oExcel.ActiveSheet.Cells(r,c).Font.Bold = true;
    oExcel.ActiveSheet.Cells(r,c).Value = eSrc.cells(i).innerText.trim();
   }
  oExcelSheet.Application.Visible = true;
}


function toggleChecks( f, toggle )
{
	for ( var i = 2; i < arguments.length; i++ )
	{
		cbGroup = f.elements[arguments[i]];
		if ( typeof cbGroup == 'undefined' ) continue;
		if ( cbGroup.length > 1 )
		{
			for ( var j = 0; ( cb = cbGroup[j] ); j++ )
			{
				cb.checked = toggle;
			}
		}
		else
		{
			cbGroup.checked = toggle;
		}
	}
}


function Mascara_Hora(Hora, campo) {
    var hora01 = '';
    hora01 = hora01 + Hora;
    if (hora01.length == 2) {
        hora01 = hora01 + ':';
        campo.value = hora01;
    }
    if (hora01.length == 5) {
        Verifica_Hora(campo);
    }
    else {
        alert("Hora invalida, debe tener el Formato 00:00!");
        campo.focus();
        campo.select();
    }
}


function Verifica_Hora(campo) {
    hrs = (campo.value.substring(0, 2));
    min = (campo.value.substring(3, 5));
    estado = "";
    if ((hrs < 00) || (hrs > 23) || (min < 00) || (min > 59)) {
        estado = "errada";
    }

    if (campo.value == "") {
        estado = "errada";
    }
    if (estado == "errada") {
        alert("Hora invalida, debe tener el Formato 00:00!");
        campo.focus();
        campo.select();
    }
}

function printit() {
    window.parent.horario.focus();
    window.parent.horario.print();
}

if (typeof window.event == 'undefined') {
    document.onkeypress = function(e) {
        var test_var = e.target.nodeName.toUpperCase();
        if (e.target.type) var test_type = e.target.type.toUpperCase();
        if ((test_var == 'INPUT' && test_type == 'TEXT') || test_var == 'TEXTAREA') {
            return e.keyCode;
        } else if (e.keyCode == 8) {
            e.preventDefault();
        }
    }
} else {
    document.onkeydown = function() {
        var test_var = event.srcElement.tagName.toUpperCase();
        if (event.srcElement.type) var test_type = event.srcElement.type.toUpperCase();
        if ((test_var == 'INPUT' && test_type == 'TEXT') || test_var == 'TEXTAREA') {
            return event.keyCode;
        } else if (event.keyCode == 8) {
            event.returnValue = false;
        }
    }
}

function hide() {
    var text = document.formularioz.LugEmi;
    var text2 = document.formularioz.DocIdAd;
    if (document.formularioz.TipoDoc.value == 1) {
        text.style.visibility = "visible";
        text2.style.visibility = "visible";
        text.text = "";
        text2.text = "";
        document.getElementById("datox").style.visibility = "visible";
    }
    else {
        text.style.visibility = "hidden";
        text2.style.visibility = "hidden";
        text.text = "";
        text2.text = "";
        document.getElementById("datox").style.visibility = "hidden";
    }
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

function $_(IDS){
    return document.getElementById(IDS); 
} 

function HideElemx(IDS1, IDS2) {
    var C2 = $_(IDS2);
    var selectedValue = IDS1.value;
    var cadena = selectedValue.substr(0, 1);
    if (cadena == "A") {
        C2.style.display = 'block';
    }
    else if (cadena == "B") {
        C2.style.display = 'none';
    }
}

function EnableTextBox(checkBox) {
    //alert(txtbtn);
    var txtbx = document.getElementsByName("Servicio");
    alert (txtbx);

    if (checkBox.checked)
        txtbx.removeAttribute('readonly');
    else
        txtbx.addAttribute('readonly');
}

var popUpObj;
function showModalPopUp(laurl) {
    popUpObj = window.open(laurl,
    "Presentar Reporte",
    "toolbar=no," +
    "scrollbars=yes," +
    "location=no," +
    "statusbar=no," +
    "menubar=no," +
    "resizable=1," +
    "width=900," +
    "height=800," +
    "lef=0,"+
    "top=1"
    );
    popUpObj.focus();
    LoadModalDiv();
}

function LoadModalDiv() {
    var bcgDiv = document.getElementById("divBackground");
    bcgDiv.style.display = "block";
}
function HideModalDiv() {
    var bcgDiv = document.getElementById("divBackground");
    bcgDiv.style.display = "none";
}

function LetrasyNumeros(e) {
    var tecla = document.all ? tecla = e.keyCode : tecla = e.which;
    var especiales = [8, 13, 45];/*back, 32 space, enter */

    for (var i in especiales) {
        if (tecla == especiales[i]) { return true; }
    }
    return (((tecla >= 48 && tecla <= 57) || (tecla > 96 && tecla < 123) || (tecla > 64 && tecla < 91)) || tecla == 8);
}


function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    return (key >= 48 && key <= 57)
}

function exportF(elem) {
  var table = document.getElementById("table");
  var html = table.outerHTML;
  var url = 'data:application/vnd.ms-excel,' + escape(html); // Set your html table into url 
  elem.setAttribute("href", url);
  elem.setAttribute("download", "export.xls"); // Choose the file name
  return false;
}