console.log('DANNY JOEL BUCAY SHUCAD')


var txt_input = document.getElementById('txt_input');


function encriptar() {
    var resultado = txt_input.value
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById("cmp_empty").style.display = "none";
    txt_ouput.innerText = resultado;
}


function desencriptar() {
    var resultado = txt_input.value
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById("cmp_empty").style.display = "none";
    txt_ouput.innerText = resultado;
}


