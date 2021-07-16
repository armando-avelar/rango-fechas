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

    if(rango1.inicio.isBefore(rango2.inicio)){
        if(rango2.inicio.isBefore(rango1.fin)){
            console.log('estas en el rango 1');
            return
        }
    }

    if(rango2.inicio.isBefore(rango1.inicio)){
        if(rango2.fin.isAfter(rango1.inicio)){
            console.log('estas en el rango 1');
            return;
        }
    }

    console.log('fechas validas');
    
})();