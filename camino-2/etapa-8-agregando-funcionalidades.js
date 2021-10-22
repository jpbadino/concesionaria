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
   
   /* Con arrow functions (no lo toma el PG): 
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

   /* Con arrow functions: */
   autosParaLaVenta: () => {
      let autosSinVender = autos.filter((auto) => {
         return auto.vendido == false;
      })
      return autosSinVender;
   },

   /* Con funciones regulares:
   autosParaLaVenta: function() {
      let autosSinVender = autos.filter(function(auto) {
         return auto.vendido == false;
      })
      return autosSinVender;
   }, */
   
   /* Con funciones regulares: */
   autosNuevos: function(){
        let autos0Km = this.autosParaLaVenta();
        return autos0Km.filter(function (auto){
           return auto.km < 100
        })
   },

   /* Con arrow functions (no lo toma el PG):
    autosNuevos: () => {
       let autos0Km = this.autosParaLaVenta();
       return autos0Km.filter((autos) => {
          return auto.km < 100;
       })
    }*/
    
   /* Con arrow functions: */
   listaDeVentas: () => {
      let autosVendidos = autos.filter((auto) => {
         return auto.vendido == true;
      })
      let listaDeVentas = autosVendidos.map((auto) => {
         return auto.precio;
      })
      return listaDeVentas;
   },

   /* Con funciones regulares (no lo toma el PG):
   listaDeVentas: function() {
      let autosVendidos = autos.filter(function(auto) {
         return auto.vendido == true;
      })
      let listaDeVentas = autosVendidos.map(function() {
         return auto.precio;
      })
      return listaDeVentas;
   }*/

   /* Con funciones regulares: */
   totalDeVentas: function() {
      return this.listaDeVentas().reduce((prev, curr) => {
            return prev + curr;
      }, 0)
   },

   /* Con arrow functions (no lo toma el PG):
   totalDeVentas: () => {
      return this.listaDeVentas().reduce((prev, curr) => {
            return prev + curr;
      }, 0)
   },
   */

   puedeComprar: (auto, persona) => {
      let cuota = auto.precio / auto.cuotas;
      return persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > cuota
   },
   
   /* Posible solución con arrow funcitons (no lo toma el PG): */
   autosQuePuedeComprar: (persona) => {
      let autosParaLaVenta = this.autosParaLaVenta();
      let autosQuePuedeComprar = autosParaLaVenta.filter((auto) => {
          return this.puedeComprar(auto, persona);
      })
      return autosQuePuedeComprar;
   },

   /* Solución válida: 
   autosQuePuedeComprar(persona){
        return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,persona))
   },*/
   
};      