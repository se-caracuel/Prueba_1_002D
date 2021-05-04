
  function mensaje() {
    alert('hola mundo');

}

function validarFormulario() {
    var resp = validaRut();
    if (resp == false ) {
        return false;
    }
    resp = validaFecha();
    if (resp == false) {
        return false;
    }
    return true;
    
}

function validaFecha() {
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    var fechaSistema = new Date();
    console.log('Fecha Usuario: ' +fechaUsuario);
    console.log('Fecha Sistema: ' +fechaSistema);

    var ano = fechaUsuario.slice(0,4);
    var mes = fechaUsuario.slice(5,7);
    var dia = fechaUsuario.slice(8,10);
    console.log('año: '+ano);
    console.log('Mes: '+mes);
    console.log('dia: '+dia);

    var fechaNuevaUsuario = new Date(ano, (mes-1), dia);
    console.log('Nueva Fecha : '+fechaNuevaUsuario);

    /// fecha ingresada menor a la actual

    if (fechaNuevaUsuario > fechaSistema) {
        alert('Fecha Incorrecta')
        return false;
        
    }
    // minimo 18 años
    var unDia = 24 * 60 * 60 *1000;// 1 dia en mili segundos
    var diferencia = Math.trunc((fechaSistema.getTime() - fechaNuevaUsuario.getTime()) / unDia);
    console.log('Dias: '+diferencia);

    var anos = Math.trunc(diferencia / 365);
    console.log('Edad :' +anos);
    if (anos < 18) {
        //alert('Es menor de edad, usted tiene ' +anos+ ' de edad');
        Swal.fire({
            icon: 'error',
            title: 'Error en el Campo Fecha de Nacimiento',
            text: 'Usted es menor de edad, tiene ' +anos+ ' años de edad.'
          });
        return false;
    }
    return true;
}







function validaRut() {
    var rut = document.getElementById('txtRut').value;
    //alert(rut);
    console.log(rut);
    var num = 3;
    var suma = 0;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index,index+1);
        console.log(caracter+ ' x ' +num);
        suma = suma + (caracter * num);
        num = num - 1;
        if (num == 1) {
            num = 7;
            
        }
    }
    console.log('suma :' +suma);
    var resto = suma % 11;
    var dv = 11 - resto;
    if (dv > 9) {
        if (dv == 10) {
            dv = 'K';    
        }else{
            dv = 0;
        }
        
    }
    console.log(dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario ) {
        //alert('Rut es incorrecto');
        Swal.fire({
            icon: 'error',
            title: 'Rut Incorrecto',
            text: 'El Rut es Incorrecto, vuelva a intentarlo.'
          });
        return false;
        
    }
    return true;
}