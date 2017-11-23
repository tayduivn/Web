'use strict';

module.exports = function(Evento) {

		Evento.saludos = function(msg, cb) {
      cb(null, 'Un saludo a la banda... ' + msg);
    }

    Evento.remoteMethod('saludos', {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'saludos', type: 'string'}
    });


};
