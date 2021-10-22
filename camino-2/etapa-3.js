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
   
   /* Con arrow functions (no functiona): 
   venderAuto: (patente) => {
      autos.forEach((auto) => {
         if (auto.patente == patente) {
            auto.vendido = true;
         };
      })
   },*/
   
   /* Con funciones regulares: */
   venderAuto: function(patente) {
      // No es estrictamente necesario reutilizar la función buscarAuto(), pero es necesario para que el Playground apruebe el ejercicio:
      let autoVendido = this.buscarAuto(patente);
      autos.forEach(function(auto) {
         if (auto.patente == patente) {
            auto.vendido = true;
         }
      })
   },
   
};