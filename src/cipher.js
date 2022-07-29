const cipher ={encode, decode};
function encode(offset, string) {
  if(typeof offset != 'number' || typeof string != 'string'){
    throw TypeError();
  }
let cifrarTexto = "";
for (let i = 0, letras = string.length; i < letras; i++){
  let tabela = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
  cifrarTexto += String.fromCharCode(tabela);
}
return cifrarTexto;
}

function decode (offset, string){
  if(typeof offset != 'number' || typeof string != 'string'){
    throw TypeError();
  }
  let decifrarTexto ="";
  for (let i = 0, letras = string.length; i < letras; i++){
    let nAscii = ((string.charCodeAt(i) - 90 - offset) % 26) + 90;
    decifrarTexto += String.fromCharCode(nAscii);
  }
  return decifrarTexto;
}

export default cipher;

