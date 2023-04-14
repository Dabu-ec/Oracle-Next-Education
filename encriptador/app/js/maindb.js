console.log('DEV: DANNY JOEL BUCAY SHUCAD')


var txt_input = document.getElementById('txt_input');
var txt_ouput = document.getElementById('txt_ouput');
var btn_copy = document.getElementById('btn_copy');
ocultar_imagen();


function encriptar() {
    let resultado='';
    if (!txt_input.value) alert('Por favor: Ingrese la información a encriptar.');
    else {
        mostrar_imagen();
        resultado = txt_input.value
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        txt_ouput.value = resultado;
    }
}

function desencriptar() {
    let resultado='';
    if (!txt_input.value) alert('Por favor: Ingrese la información a desencriptar.');
    else {
        mostrar_imagen();
        resultado = txt_input.value
         .replace(/enter/g, 'e')
         .replace(/imes/g, 'i')
         .replace(/ai/g, 'a')
         .replace(/ober/g, 'o')
         .replace(/ufat/g, 'u');
        txt_ouput.value = resultado;
    }
}


function copiar() {
    alert("Su información ha sido copiada.");
    txt_ouput.select();
    document.execCommand("copy");
    ocultar_imagen();
    txt_input.value = '';

}

function validar() {
    if (txt_input.value == '') {
        ocultar_imagen();
        txt_ouput.value = '';
    }
}

function mostrar_imagen() {
    document.getElementById("cmp_empty").style.display = "none";
    txt_ouput.style.display = "block";
    btn_copy.style.display = "block";
}

function ocultar_imagen() {
    document.getElementById("cmp_empty").style.display = "block";
    txt_ouput.style.display = "none";
    btn_copy.style.display = "none";
}




