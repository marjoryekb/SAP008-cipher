const cipher ={encode, decode};
function encode(offset, string) {
  if(typeof offset != 'number' || typeof string != 'string'){
    throw TypeError();
  }
let cifrarTexto = "";
for (let i = 0; i < string.length; i++){
  if (32 != string.charCodeAt(i)) {
  let tabela = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
  cifrarTexto += String.fromCharCode(tabela);
}
else
        cifrarTexto += String.fromCharCode(32);
    }
return cifrarTexto;
}

function decode (offset, string){
  if(typeof offset != 'number' || typeof string != 'string'){
    throw TypeError();
  }
  let decifrarTexto ="";
  for (let i = 0; i <string.length; i++){
    if (32 != string.charCodeAt(i)) {
    let nAscii = ((string.charCodeAt(i) - 90 - offset) % 26) + 90;
    decifrarTexto += String.fromCharCode(nAscii);
  }
  else
  decifrarTexto += String.fromCharCode(32);
}
  return decifrarTexto;
}

export default cipher;

