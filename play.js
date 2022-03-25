function fases_lunares() {
    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let faseLunar = new Array("Luna Llena", "Cuarto Menguante", "Luna Nueva", "Cuarto Creciente");
    let f = new Date();
    year = f.getFullYear();
    month = f.getMonth();
    day = f.getDate();
    dia = 2;

    for (var mes = 1; mes <= 12;) {
        dias = formula(mes)
        for (var ciclo = 0; ciclo < 4; ciclo++) {
            for (c = 0; c <= 6; c++) {

                if (mes != 13) {
                    if (day == dia && month == mes) {

                        document.getElementById("luna").innerHTML = `
                        <p> ${day} de ${meses[month]}</p>
                        <p>Fase lunar: <b>${faseLunar[ciclo]}</b> </p> <img src="img/${ciclo}.png">`;
                    }
                }

                if (dia >= dias) {
                    dia = 1;
                    mes++;
                } else {
                    dia++;
                }

            }
            //cierre de ciclo
        }
        //cierre de mes
    }
    //cierre de la funcion
}


function formula(mes) {
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        dias = 31;
    }
    else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        dias = 30;
    }
    else if (year % 4 == 0 && mes == 2) {
        dias = 29
    }
    else {
        dias = 28
    }
    return dias;
}