/// <reference path="jquery/3.1.1/jquery-3.1.1.min.js" />
jQuery(document).ready(function ($) {
    $('#MImprimir').click(function () {
        $("#printIncidencia").printArea();
    })

    $('#seleccion').find('.print-link').on('click', function () {
        $('#seleccion').print({
            //Use Global styles
            globalStyles: true,
            //Add link with attrbute media=print
            mediaPrint: false,
            //Custom stylesheet
            stylesheet: "https://csi.scz.ucb.edu.bo/Url/Portal_CSS_Principal.css?v=0410201707",
            //Print in a hidden iframe
            iframe: false,
            append: null,
            prepend: null,
            manuallyCopyFormValues: true,
            //Don't print this
            noPrintSelector: ".no-print",
            //Log to console when printing is done via a deffered callback
            deferred: $.Deferred().done(function () { console.log('Printing done', arguments); }),
            timeout: 750,
            title: null,
            doctype: '<!doctype html>'
        });
    });
});

function PrintElem(elem) {
    var html = '<html><head><title>' + document.title + '</title>\n';
    html += '<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/reset.css?v=112017">\n';
    html += '<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/normalize.css">\n';
    html += '<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/Imprimir.css?v=20171106">\n';
    html += '<script src="https://csi.scz.ucb.edu.bo/Url/jquery/3.1.1/jquery-3.1.1.min.js"><\/script>\n';
    html += '<META HTTP-EQUIV="Pragma" CONTENT="no-cache">\n';
    html += '<META HTTP-EQUIV="Expires" CONTENT="-1">\n';
    html += '</head><body>';
    //mywindow.document.write('<h1>' + document.title + '</h1>');
    html += document.getElementById(elem).innerHTML;
    html += '</body></html>';

    var is_chrome = navigator.userAgent.indexOf("Chrome") != -1 ? true : false;
    var is_safari = navigator.userAgent.indexOf("Safari") != -1 ? true : false;
    if (is_chrome || is_safari) {
        var mywindow = window.open('', 'PRINT', 'height=640,width=480');
        mywindow.document.open();
        mywindow.document.write(html);
        mywindow.document.close();
        mywindow.onload = function () {
            mywindow.moveTo(0, 0);
            mywindow.resizeTo(640, 480);
            mywindow.print();
            setTimeout(function () {
                mywindow.close();
            }, 500);
        }
    }
    else{
        var mywindow = window.open('', 'PRINT', 'height=200,width=200');
        mywindow.document.open();
        mywindow.document.write(html);
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        mywindow.close();
    }

}

function imprSelec(nombre) {
    var gAutoPrint = true;


    if (document.getElementById != null) {
        var html = '<HTML>\n<HEAD>\n';
        //if (document.getElementsByTagName != null) {
        //    var headTags = document.getElementsByTagName("head");
        //    if (headTags.length > 0) html += headTags[0].innerHTML;
        //}
       // html += '<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/reset.css?v=112017">\n';
        html += '<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/normalize.css">\n';
        html += '<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/Imprimir.css?v=20180228">\n';
        html += '\n</HE' + 'AD>\n<BODY>\n';
        var printReadyElem = document.getElementById(nombre);
        if (printReadyElem != null) html += printReadyElem.innerHTML;
        else {
            alert("Error, No  hay Contenido.");
            return;
        }
        html += '\n</BO' + 'DY>\n</HT' + 'ML>';
        var is_chrome = navigator.userAgent.indexOf("Chrome") != -1 ? true : false;
        var is_safari = navigator.userAgent.indexOf("Safari") != -1 ? true : false;
        if (is_chrome || is_safari) {
            var mywindow = window.open('', 'PRINT', 'height=640,width=480');
            mywindow.document.open();
            mywindow.document.write(html);
            mywindow.document.close();
            mywindow.onload = function () {
                mywindow.moveTo(0, 0);
                mywindow.resizeTo(640, 480);
                mywindow.print();
                setTimeout(function () {
                    mywindow.close();
                }, 500);
            }
        } else {
            var printWin = window.open("", "Impresión");
            printWin.document.open();
            printWin.document.write(html);
            printWin.document.close();
            if (gAutoPrint) printWin.print();
            //printWin.close();
            setTimeout(function () { printWin.close(); }, 1000);
        }
    } else alert("Navegador No soportado.");
}

function CallPrint(strid) {

    var printContent = document.getElementById(strid);
    var windowUrl = 'about:blank';
    var uniqueName = new Date();
    var windowName = 'Print' + uniqueName.getTime();

    var printWindow = window.open(windowUrl, windowName, 'left=200,top=200,width=800,height=600');

    printWindow.document.write('<html>\n');
    printWindow.document.write('<head>\n');

    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {

    }
    else {
        printWindow.document.write('<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/reset.css?v=112017">\n');
        printWindow.document.write('<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/normalize.css">\n');
        printWindow.document.write('<link rel="stylesheet" type="text/css" href="https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/imprimir.css">\n');
    }

    printWindow.document.write('<script>\n');

    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
        printWindow.document.write('var chromeCss = document.createElement("link");\n');
        printWindow.document.write('chromeCss.rel = "stylesheet";\n');
        printWindow.document.write('chromeCss.href = "https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/reset.css?v=112017">\n');
        printWindow.document.write('chromeCss.href = "https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/normalize.css">\n');
        printWindow.document.write('chromeCss.href = "https://csi.scz.ucb.edu.bo/Url/Skin/csi/css/imprimir.css">\n');
        printWindow.document.write('document.getElementsByTagName("head")[0].appendChild(chromeCss);\n');
    }

    printWindow.document.write('function winPrint()\n');
    printWindow.document.write('{\n');
    printWindow.document.write('window.focus();\n');


    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
        printWindow.document.write('printChrome();\n');
    }
    else {
        printWindow.document.write('window.print();\n');
    }


    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        printWindow.document.write('window.close();\n');
    }
    else {
        printWindow.document.write('chkstate();\n');
    }
    printWindow.document.write('}\n');


    printWindow.document.write('function chkstate()\n');
    printWindow.document.write('{\n');
    printWindow.document.write('if(document.readyState=="complete")');
    printWindow.document.write('{\n');
    printWindow.document.write('window.close();\n');
    printWindow.document.write('}\n');
    printWindow.document.write('else{\n');
    printWindow.document.write('setTimeout("chkstate();",3000);\n');
    printWindow.document.write('}\n');
    printWindow.document.write('}\n');

    printWindow.document.write('function printChrome()\n');
    printWindow.document.write('{\n');
    printWindow.document.write('if(document.readyState=="complete")');
    printWindow.document.write('{\n');
    printWindow.document.write('window.print();\n');
    printWindow.document.write('}\n');
    printWindow.document.write('else{\n');
    printWindow.document.write('setTimeout("printChrome();",3000);\n');
    printWindow.document.write('}\n');
    printWindow.document.write('}\n');


    printWindow.document.write('</scr');
    printWindow.document.write('ipt>');

    printWindow.document.write('</head>');
    printWindow.document.write('<body onload="winPrint()" >');
    printWindow.document.write('<table cellpadding="15px" width="100%" align="center">');
    printWindow.document.write('<tr>');
    printWindow.document.write('<td style="background-color: #d0dee1;">');
    printWindow.document.write('<table class="gray_border" align="center">');
    printWindow.document.write('<tr>');
    printWindow.document.write('<td>');
    printWindow.document.write('<div style="height: 100%;">');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write('</div>');
    printWindow.document.write('</td>');
    printWindow.document.write('</tr>');
    printWindow.document.write('</table>');
    printWindow.document.write('</td>');
    printWindow.document.write('</tr>');
    printWindow.document.write('</table>');
    printWindow.document.write('</body>');
    printWindow.document.write('</html>');
    printWindow.document.close();



}

function mOvr(src, clrOver) {
    if (!src.contains(event.fromElement)) {
        //src.style.cursor = 'hand';
        src.bgColor = clrOver;
    }
}
function mOut(src, clrIn) {
    if (!src.contains(event.toElement)) {
        // src.style.cursor = 'default';
        src.bgColor = clrIn;
    }
}
function mClk(src) {
    if (event.srcElement.tagName == 'TD') {
        src.children.tags('A')[0].click();
    }
}

function FSfncCheckTime(FormField) {
    // CheckTime se suministra en formato horario de 24 horas (hh:mm).
    // Implemente añadiendo un controlador de eventos onSubmit al FORM o un controlador de eventos onBlur a un elemento INPUT, por ejemplo, onBlur="FSfncCheckTime(this)".
    var hora = FormField.value;

    if (hora.length > 0 && hora.length == 5) {
        if (FormField.value.indexOf(":") == -1) { alert(" no es una hora válida ingrese el formato 00:00"); FormField.focus(); return false } // FormField.focus(); return false}
        var ArrayTime = FormField.value.split(":");
        if ((ArrayTime.length != 2) || (isNaN(ArrayTime[0])) || (ArrayTime[0] == "") || (isNaN(ArrayTime[1])) || (ArrayTime[1] == "")) { alert(" no es una hora válida"); FormField.focus(); return false }
        if ((parseInt(ArrayTime[0], 10) < 0) || (parseInt(ArrayTime[0], 10) > 23) || (parseInt(ArrayTime[1], 10) < 0) || (parseInt(ArrayTime[1], 10) > 59)) { alert(" no es una hora válida"); FormField.focus(); return false }
        return true;
    }
    alert(" no es una hora válida ingrese el formato 00:00");
    FormField.focus();
    return false;
}

function FSfncCheckDateFormat(FormField, FormatMode) {
    // CheckDate suministrada es válida. FormatMode es opcional, si no se suministra tendrá el valor 1 por defecto (1=dd/mm/aaaa, 0=mm/dd/aaaa).
    // Implemente añadiendo un controlador de eventos onSubmit al FORM o un controlador de eventos onBlur a un elemento INPUT, por ejemplo, onBlur="FSfncCheckDateFormat(this,0)".
    if (FormatMode != 0) { FormatMode = 1 }
    var fecha = FormField.value
    if (fecha.length > 0) {
        if (FormField.value.indexOf("/") == -1) { alert(FormField.title + " no es una fecha válida ingrese el formato 00/00/0000 -0"); FormField.focus(); FormField.select(); return false }
        var ArrayDate = FormField.value.split("/");
        if ((ArrayDate.length != 3) || (isNaN(ArrayDate[0])) || (ArrayDate[0] == "") || (isNaN(ArrayDate[1])) || (ArrayDate[1] == "") || (isNaN(ArrayDate[2])) || (ArrayDate[2] == "")) { alert(FormField.title + " no es una fecha válida"); FormField.focus(); FormField.select(); return false }
        var daysInMonth = new Array(0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        if ((parseInt(ArrayDate[1 - FormatMode], 10) < 1) || (parseInt(ArrayDate[1 - FormatMode], 10) > daysInMonth[parseInt(ArrayDate[0 + FormatMode], 10)])) { alert(FormField.title + " no es una fecha válida ingrese el formato 00/00/0000 -1 "); FormField.focus(); FormField.select(); return false }
        if ((parseInt(ArrayDate[0 + FormatMode], 10) == 2) && (parseInt(ArrayDate[1 - FormatMode], 10) > FSfncDaysInFebruary(parseInt(ArrayDate[2], 10)))) { alert(FormField.title + " no es una fecha válida ingrese el formato 00/00/0000 -2"); FormField.focus(); FormField.select(); return false }
        if ((parseInt(ArrayDate[0 + FormatMode], 10) < 1) || (parseInt(ArrayDate[0 + FormatMode], 10) > 12)) { alert(FormField.title + " no es una fecha válida ingrese el formato 00/00/0000 -3"); FormField.focus(); FormField.select(); return false }
        return true;
    }
    return false;
}
