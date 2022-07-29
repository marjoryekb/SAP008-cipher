import cipher from './cipher.js';

const codifica = document.getElementById("envcri");
codifica.addEventListener("click", function(e){
    e.preventDefault();
    let numeroDeslocamento = parseInt(document.getElementById("deslo").value);
    let campo = document.getElementById("codi").value;
    campo = campo.toUpperCase();
    let resultado = cipher.encode(numeroDeslocamento, campo);
     document.getElementById("resu").innerHTML = resultado;
    
});



const decifrar = document.getElementById("destra");
decifrar.addEventListener("click", function(e){
    e.preventDefault();
    let valorDeslocamento = parseInt(
        document.getElementById("desloc").value
        );
        let valortexto = document.getElementById("tradu").value;
        let resultado = cipher.decode(valorDeslocamento , valortexto);
        document.getElementById("deci").innerHTML = resultado;

    
});
