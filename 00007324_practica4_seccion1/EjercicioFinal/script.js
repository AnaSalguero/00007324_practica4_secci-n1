document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn_buscar");
    function buscarTarea(dia_semana) {
        switch (dia_semana) {
            case 'Lunes': case 'lunes':
                return "Atender a un cliente";
            case 'Martes': case 'martes':
                return "Visitar una agencia fuera de la ciudad";
            case 'Miercoles': case 'miercoles':
                return "Llevar a su hija al ballet";
            case 'Jueves': case 'jueves':
                return "Priorizar las entregas de desarrollo";
            case 'Viernes': case 'viernes':
                return "Atender problemas de manera remota";
            case 'Sabado': case 'sabado':
                return "Hacer todo lo que su esposa quiera";
            default:
                alert("El dia esta equivocado o no hay actividades para este dia");
                return null;
        }
    }
    //Si se da click en el boton, realiza lo siguiente
    boton.addEventListener("click", () => {
        //.trim() elimina espacios en blanco dentro del texto
        const diaIngresado = document.getElementById("dia_semana").value.trim();
        //almacenamos el texto dentro de una variable
        const resultado = buscarTarea(diaIngresado);
        //si no hay resultado, no se muestra nada
        if (!resultado) {
            document.getElementById("Apartado_mensaje").innerHTML ="";
            return;
        }
        //generamos un diseño para el recordatorio
        let recordatorio = `
        <div class="Apartado_mensaje">
            <h4>Actividad por realizar este ${diaIngresado}:</h4>
            <p>${resultado}</p>
        </div>`;
        //enviando el diseño 
        document.getElementById("Apartado_mensaje").innerHTML = recordatorio;
    });
});
