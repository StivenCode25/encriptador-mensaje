const d = document;
const texArea = d.querySelector(".form__input");
const imagenPersona = d.querySelector(".result__img");
const loader = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".result__title");
const resultadoText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".btn_form_1");
const botonDesencriptar = d.querySelectorAll(".btn_form_1");
const botonCopiar = d.querySelector(".result__btn");

const llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriparMensaje(mensaje){
    let mensajeEncriptado ="";
    for(let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
                break;            
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function descriptarMensaje(mensaje){
    let mensajeDescriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDescriptado = mensajeDescriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDescriptado;
}

texArea.addEventListener("input", (e) => {
    imagenPersona.style.display = "none";
    loader.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje";
    resultadoText.textContent = "";
});

botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase();
    let mensajeEncriptado = encriparMensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es: "
});

botonDesencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase();
    let mensajeDesencriptado = descriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:"
})

botonCopiar.addEventListener("click", (e) => {
    let textocopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textocopiado).then(() => {
        imagenPersona.style.display = "none";
        loader.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = "";

    })

})