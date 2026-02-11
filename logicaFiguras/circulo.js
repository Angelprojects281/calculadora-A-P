function calcular() {

    let radio= parseFloat(document.getElementById("radio").value);

    if (!validar()) {
        document.getElementById("resultado").innerHTML= "entrada invalida"
        limpiar()
        return;
    } else {
        let area= Math.PI * (radio * radio)
        let perimetro= 2 * Math.PI * radio
        
        document.getElementById("resultado").innerHTML= "resultados: <br>" + "radio: " + radio.toFixed(2) + "<br>area: " + area.toFixed(2) + "<br>perimetro: " + perimetro.toFixed(2)

        registrar("circulo", area, perimetro)
    }
    limpiar()
}