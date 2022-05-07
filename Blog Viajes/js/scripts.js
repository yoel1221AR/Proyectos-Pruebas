(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        /*
        document.getElementById("logo");
        document.getElementById("navegacion");
*/
        /* var enlaces = document.getElementByIdTagName("0");
         console.log(enlaces.length);

         for (var i = 0; i < enlaces.length; i++) {
             enlaces[i].setAttribute("target", "_blank");
         }
         var enlacesSidebar - document.getElementById("sidebar").getElementsByTagName("a")
         console.log(enlacesSidebar);

         for (vari = 0; i < enlacesSidebar.length; i++) {
             enlacesSidebar[i].setAttribute("href", "http://www.google.com")
         }*/

        /*
                var logo = document.querySelector("#logo");
                console.log(logo);

                var encabezado = document.querySelectorAll(" h2, footer p");
                console.log(encabezado);
                var enlaces = document.querySelectorAll("a");
                console.log(enlaces)
                */


        /*crear contenido*/
        /*
                var sidebar = document.querySelector("#sidebar");
                var nuevoElemento = document.createElement("h1");
                var nuevoTexto = document.createTextNode("Hola Mundo");
                nuevoElemento.appendChild(nuevoTexto);
                sidebar.appendChild(nuevoTexto);

                //Agregar entrada 6 :
                var enlacesSidebar = document.querySelectorAll("#sidebar ul");
                //creando el enlace 
                var nuevoEnlace = document.createElement("A");
                var textoEnlace = document.createTextNode("Entrada 6");
                nuevoEnlace.appendChild(textoEnlace);

                //creando la lista
                var nuevaLista = document.createElement("LI");
                nuevaLista.appendChild(nuevoEnlace);
                //lo agregamos al menu
                enlacesSidebar[0].appendChild(nuevaLista);

                */


        /*clonar nodo*/
        /*
                var contenido = document.querySelectorAll("main");
                var nuevoContenido = contenido[0].cloneNode(true);

                var sidebar = document.querySelector("aside");

                sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);
                */
        var sidebar = document.querySelector("aside");
        var masVisitados = document.createElement("h2");
        var TextoVisitados = document.createTextNode("Post mas visitados");
        masVisitados.appendChild(TextoVisitados);
        sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

        var contenido = document.querySelectorAll("main,h2");
        for (var i = 0; i < contenido.length; i++) {
            var nuevoElemento = document.createElement(LI);
            var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
            nuevoElemento.appendChild(nuevoTexto);
            sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);

        }


    });

})();