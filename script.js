function ejercicios(){
    let diaSemana = prompt("¿Qué día es hoy?");

        switch (diaSemana) {
            case "lunes":
                alert("Hoy tenes que hacer bicicleta.");
                break
            case "martes":
                alert("Hoy tenes que ir al gimnasio.");
                break
            case "miercoles":
                alert("Hoy tenes que jugar al futbol.");
                break
            case "jueves":
                alert("Hoy tenes que Correr.");
                break
            case "viernes":
                alert("Hoy tenes que jugar Padel.");
                break
            case "sabado":
                alert("Hoy tenes Descanso.");
                break
            case "domingo":
                alert("Hoy tenes que caminar.");
                break

            default:
                    alert("Escribe el dia de la semana en minúsculas.");
        }
}

function buclenum(){
    for (i=20;i<=70;i++){
        document.write("El número es: " + i + "<br>");
    }
}

function buclesaludo(){
    var num=prompt("Ingrese la cantidad de veces desee saludar: ");
    
    for(i=1;i<=num;i++){
        alert("Hola Mundo "+i);
    }
}