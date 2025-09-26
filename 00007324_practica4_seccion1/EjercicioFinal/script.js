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

    boton.addEventListener("click", () => {
        //.trim() elimina espacios en blanco dentro del texto
        const diaIngresado = document.getElementById("dia_semana").value.trim();
        const resultado = buscarTarea(diaIngresado);
        if (!resultado) {
            document.getElementById("Apartado_mensaje").innerHTML ="";
            return;
        }
        let recordatorio = `
        <div class="Apartado_mensaje">
            <h4>Actividad por realizar este ${diaIngresado}:</h4>
            <p>${resultado}</p>
        </div>`;
        //enviando la funcion a html
        document.getElementById("Apartado_mensaje").innerHTML = recordatorio;
    });
});
