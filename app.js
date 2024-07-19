function encriptar () {
let texto = document.getElementById ("texto").value;
let titulo_Mensaje = document.getElementById ("titulo_Mensaje");
let parrafo_Derecha = document.getElementById ("parrafo_Derecha");
let imagen_Derecha = document.getElementById ("imagen_derecha");

let textoCifrado = texto
        
        .replace (/á/gi, "a")
        .replace (/é/gi, "e")
        .replace (/í/gi, "i")
        .replace (/ó/gi, "o")
        .replace (/ú/gi, "u")
        .replace (/e/gi, "enter")
        .replace (/o/gi, "ober")
        .replace (/u/gi, "ufat")
        .replace (/i/gi, "imes")
        .replace (/a/gi, "ai");

    if (texto.length != 0) {
     document.getElementById ("texto").value = textoCifrado;
     document.getElementById ("titulo_Mensaje").textContent = "Texto encriptado con éxito";
     document.getElementById ("parrafo_Derecha").textContent = "";
     document.getElementById ("imagen_Derecha").src = "encriptado.gif";
    }
    else {
        document.getElementById ("imagen_Derecha").src = "Muñeco.png";
        parrafo_Derecha.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
        document.getElementById ("titulo_Mensaje").textContent = "No se ha encontrado ningun texto";
        alert ("Debes ingresar algun texto");
    }
}

  function desencriptar () {
      let texto = document.getElementById("texto").value;

      let textoCifrado = texto
         .replace (/ai/gi, "a")
         .replace (/enter/gi, "e")
         .replace (/imes/gi, "i")
         .replace (/ober/gi, "o")
         .replace (/ufat/gi, "u");

      if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        titulo_Mensaje.textContent = "Texto desencriptado con éxito";
        parrafo_Derecha.textContent = "";
        document.getElementById ("imagen_Derecha").src = "Img/desencriptar.gif";
      }
      else {
        document.getElementById ("imagen_Derecha").src = "Img/Muñeco.png";
        parrafo_Derecha.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
        document.getElementById ("titulo_Mensaje").textContent = "No se ha encontrado ningun texto";
        alert ("Debes ingresar algun texto");
      }
      }

