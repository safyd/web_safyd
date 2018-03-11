$(document).ready(function () {
    $('#acceso').click(function () {
        $("#desktop").load("Vistas/acceso/acceso.jsp");

    });
    $('#administracion').click(function () {
        $("#desktop").load("Vistas/administracion/administracion.jsp");

    });
    $('#software').click(function () {
        $("#desktop").load("Vistas/software/software.jsp");

    });
    $('#diseño').click(function () {
        $("#desktop").load("Vistas/diseño/diseño.jsp");

    });
    $('#inicio').click(function () {
        $("#desktop").load("Vistas/inicio/inicio.jsp");

    });

    $('#registro').click(function () {
        $("#desktop").load("Vistas/registro/registro.jsp");

    })
   
    ;
});