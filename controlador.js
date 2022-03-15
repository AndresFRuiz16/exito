let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let procesador=document.getElementById("procesadores").value
    console.log(procesador)
    let edad=document.getElementById("Edad").value
    console.log(edad)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
}