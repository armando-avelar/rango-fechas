const moment = require('moment');

(() => {

    let rango1 = {
        inicio : moment().startOf('day'),
        fin: moment().add(5, 'days').startOf('day')
    }

    let rango2 = {
        inicio : moment().subtract(5, 'days').startOf('day'),
        fin: moment().subtract(2, 'days').startOf('day')
    }

    if(rango1.inicio.isBetween(rango2.inicio, rango2.fin) || rango1.fin.isBetween(rango2.inicio, rango2.fin)){
        console.log('estas en el rango 2');
        return
    }

    if(rango2.inicio.isBetween(rango1.inicio, rango1.fin) || rango2.fin.isBetween(rango1.inicio, rango1.fin)){
        console.log('estas en el rango 1');
        return;
    }

    console.log('fechas validas');
    
})();
