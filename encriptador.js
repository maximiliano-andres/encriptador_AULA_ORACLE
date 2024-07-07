const dic_letras_encriptadas = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat", };

const dic_letras_desencriptadas = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u", };

function encriptarTexto() {
    let textoOriginal = document.getElementById("textoOriginal").value.toLowerCase();
    let textoEncriptado = encriptar(textoOriginal, dic_letras_encriptadas);
    document.getElementById("textoEncriptado").value = textoEncriptado;
    mostrarTextoEncriptado();
}

function desencriptarTexto() {
    let textoOriginal = document.getElementById("textoOriginal").value.toLowerCase();
    let textoDesencriptado = desencriptar(textoOriginal, dic_letras_desencriptadas);
    document.getElementById("textoDesencriptado").value = textoDesencriptado;
    mostrarTextoDesencriptado();
}

function encriptar(texto, diccionario) {
    let textoEncriptado = "";

    for (let letra of texto) {
        textoEncriptado += diccionario[letra] || letra;
    }

    return textoEncriptado;
}

function desencriptar(texto, diccionario) {
    let textoDesencriptado = texto;

    for (let clave in diccionario) {
        let regex = new RegExp(clave, "g");
        textoDesencriptado = textoDesencriptado.replace(regex, diccionario[clave]);
    }

    return textoDesencriptado;
}

function copiarAlPortapapeles(idTextArea) {
    let texto = document.getElementById(idTextArea);
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function mostrarTextoEncriptado() {
    document.getElementById("ElementoOcultar").style.display = "none";
    document.getElementById("textoEncriptadoContenedor").style.display = "block";
    document.getElementById("textoDesencriptadoContenedor").style.display = "none";
}

function mostrarTextoDesencriptado() {
    document.getElementById("ElementoOcultar").style.display = "none";
    document.getElementById("textoDesencriptadoContenedor").style.display = "block";
    document.getElementById("textoEncriptadoContenedor").style.display = "none";
}