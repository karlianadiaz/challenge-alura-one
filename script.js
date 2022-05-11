var input = document.querySelector("#escreve");
var input2 = document.querySelector("#input2");

input.focus();

function criptografar() {
  document.getElementById("container-2").style.backgroundImage = "none";

  document.getElementById("btn-visivel").style.visibility = "visible";

  var texto_entrada = input.value;
  var resultado = [];

  for (let i = 0; i < texto_entrada.length; i++) {
    var letra = "";

    if (texto_entrada[i] == "a") {
      letra = texto_entrada[i].replace("a", "ai");
      resultado.push(letra);
    } else if (texto_entrada[i] == "i") {
      letra = texto_entrada[i].replace("i", "imes");
      resultado.push(letra);
    } else if (texto_entrada[i] == "e") {
      letra = texto_entrada[i].replace("e", "enter");
      resultado.push(letra);
    } else if (texto_entrada[i] == "o") {
      letra = texto_entrada[i].replace("o", "ober");
      resultado.push(letra);
    } else if (texto_entrada[i] == "u") {
      letra = texto_entrada[i].replace("u", "ufat");
      resultado.push(letra);
    } else {
      letra = texto_entrada[i];
      resultado.push(letra);
    }
  }

  input2.innerText = resultado.join("");

  input.focus();
  input.value = "";
}

function copia() {
  document.getElementById("btn-visivel").style.visibility = "hidden";

  var output = document.getElementById("input2").innerHTML;

  navigator.clipboard.writeText(output);

  navigator.clipboard.readText().then((text) => {
    document.getElementById("input2").innerHTML = "Texto copiado!";
    // alert('Texto copiado');
  });

  output.value = "";
  input.focus();
}

function descriptografar() {
  document.getElementById("container-2").style.backgroundImage = "none";

  var texto_entrada = input.value;

  if (texto_entrada.includes("enter")) {
    texto_entrada = texto_entrada.replace(/enter/g, "e");
  }

  if (texto_entrada.includes("ai")) {
    texto_entrada = texto_entrada.replace(/ai/g, "a");
  }

  if (texto_entrada.includes("imes")) {
    texto_entrada = texto_entrada.replace(/imes/g, "i");
  }

  if (texto_entrada.includes("ober")) {
    texto_entrada = texto_entrada.replace(/ober/g, "o");
  }

  if (texto_entrada.includes("ufat")) {
    texto_entrada = texto_entrada.replace(/ufat/g, "u");
  }

  input2.innerText = texto_entrada;

  document.getElementById("btn-visivel").style.visibility = "visible";

  input.focus();
  input.value = "";
}
