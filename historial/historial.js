function registrar(figura, area, perimetro){

    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    historial.push({
        figura: figura,
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2),
    });

    localStorage.setItem("historial", JSON.stringify(historial));
}

function mostrar() {
    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    let salida = "";
    for (let i = 0; i < historial.length; i++) {
        salida += historial[i].figura +
          " | Área: " + historial[i].area +
          " | Perímetro: " + historial[i].perimetro +
          "<br><br>";

    }

    document.getElementById("historial").innerHTML = salida || "No hay registros";
}

function borrarH() {
    localStorage.removeItem("historial");
    document.getElementById("historial").textContent= "historial borrado";
    setTimeout(()=> {
        window.location.href= "historial.html";},"3000")
    
}