function counter(anhoAContar, mesAContar, diaAContar, horaAContar, minutosAContar, segundosAContar) {
  var ahora = new Date();

  /*
  var anhoAhora = ahora.getFullYear();
  var monthN = ahora.getMonth();
  var dayNow = ahora.getDate();

  if (monthNow < 11) {
    var dieciocho = new Date(yearNow, 11, 25);
  } else if (monthNow > 11) {
    var dieciocho = new Date(yearNow + 1, 11, 25);
  } else {
    if (dayNow < 25) {
      var dieciocho = new Date(yearNow, 11, 25);
    } else if (dayNow >= 25) {
      var dieciocho = new Date(yearNow + 1, 11, 25);
    }
  }
  */
  var fechaAContar = new Date(Date.UTC(anhoAContar, mesAContar, diaAContar, horaAContar, minutosAContar, segundosAContar));
  var diferencia = fechaAContar - ahora;
  console.log("diferencia " + diferencia);  

  var d = diferencia /1000 /60 /60 /24;
  var dias = Math.floor(d);

  var h = (d - dias) *24;
  var horas = Math.floor(h);

  var m = (h - horas) *60;
  var minutos = Math.floor(m);

  var s = (m - minutos) *60;
  var segundos = parseFloat(s).toFixed(0);

  var quedan = {
    "dias":dias,
    "horas":horas,
    "minutos": minutos,
    "segundos": segundos
  };

  if (diferencia < 0) {
    return ("¡Ya comenzó!");
  } else if (dias >= 1) {
    if (ahora.getHours() > horaAContar){
      return ("Quedan " + (dias + 1) + " días");
    } else {
      return ("Quedan " + dias + " días");
    }
  } else if (horas >= 1 || dias > 0) {
    return ("Quedan " + (horas) + " horas y " + minutos + " minutos");
  } else if (minutos >= 1 || horas > 0) {
    return ("Quedan " + (minutos + 1) + " minutos"); 
  } else if (segundos > 0 || minutos > 0) {
    return ("Quedan " + segundos + " segundos"); 
  }

}

function iniciar() {
  var elem = document.getElementById("contadorDias");
  elem.innerHTML = counter(2018, 7, 23, 8, 30, 0);
  setInterval(function(){elem.innerHTML = counter(2018, 7, 23, 8, 30, 0)}, 1000);
}
