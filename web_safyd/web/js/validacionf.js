/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global texto, flase */

$(document).on("ready".inicio);

function inicio(){
    $("span.help-block").hide();
      $("btnvalidar").click(validar);
}

function validar(){
    var valor = document.getElemtbyID(texto).value;
 if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
     alert("debe ingresar un caracter");
        return false;
}
   else if( isNaN(valor)){
       alert("solo acepto numero");
   return flase;  }     
      else{
          alert("el campo esta validado");
      }
}