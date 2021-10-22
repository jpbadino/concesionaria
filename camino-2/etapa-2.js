let autos = require("./autos");

let concesionaria = {
   autos: autos,
 
   /* Con arrow functions */
   buscarAuto: (patente) => {
      let autoEncontrado = autos.filter((auto) => {
         return auto.patente == patente;
      });
      autoEncontrado = autoEncontrado[0];
      if (autoEncontrado) {
         return autoEncontrado;
      } else {
         return null;
      };
   },

   /* Con funciones regulares
   buscarAuto: function(patente) {
      let autoEncontrado = autos.filter(function(auto) {
         return auto.patente == patente;
      })
      autoEncontrado = autoEncontrado[0];
      if (autoEncontrado) {
         return autoEncontrado;
      } else {
         return null;
      };
   } */
   
};