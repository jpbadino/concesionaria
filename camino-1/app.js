const autos = require('./autos')

const concesionaria = {
    autos:autos,

    buscarAuto: function(patente){
        let autoABuscar = null;
        this.autos.filter(function(auto){
            if(auto.patente == patente){
                autoABuscar = auto;
            }
        })
        return autoABuscar
    },

    venderAuto: function(patente){
        this.buscarAuto(patente).vendido = true
    },

    autosParaLaVenta: function(){
        return this.autos.filter(function(auto){
           return !auto.vendido
        });
    },

    autosNuevos: function(){
        let autos0Km = this.autosParaLaVenta();
        return autos0Km.filter(function (auto){
           return auto.km < 100
        })
    },

    listaDeVentas: function(){
        let precios = this.autos.filter(function(auto){
           return auto.vendido
        });
        return precios.map(function(auto){
           return auto.precio
        })
    },

    totalDeVentas(){
        return this.listaDeVentas().reduce((ac,venta) => ac + venta, 0);
    },

    puedeComprar(auto,persona){
        let cuota = auto.precio/auto.cuotas;
        return persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > cuota;
    },

    autosQuePuedeComprar(persona){
        return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,persona))
    }

}
