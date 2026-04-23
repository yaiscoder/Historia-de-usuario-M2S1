//Change the text

const btnRead = document.getElementById("btn-read");
const extra = document.getElementById("extra");

btnRead.addEventListener("click", function () {
    if (extra.style.display === "none") {
        extra.style.display = "inline";
        btnRead.textContent = "Leer menos";
    } else {
        extra.style.display = "none";
        btnRead.textContent = "Leer más";
    }
});

//Welcome message

window.addEventListener("load", function () {
    alert("¡Bienvenidos/das a mi portafolio!");
});

//show/hide content

const btnHidden = document.getElementById('btn-hidden');
const listaProyectos = document.getElementById('project');

btnHidden.addEventListener('click', function() {
    if (listaProyectos.style.display !== "none") {
        listaProyectos.style.display = "none";
        btnHidden.textContent = "Mostrar Proyectos";
    } 

    else {
        listaProyectos.style.display = "grid"; 
        btnHidden.textContent = "Ocultar Proyectos";
    }
});