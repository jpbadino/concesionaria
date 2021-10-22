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

};

//6)

//7)

//8)

//1) buscarAuto: la funcion buscar autos, recibe la patente como parametro. generamos una variable, la cual le asignamos por defecto el valor null por si la patente no coincide con la del obejto, nos va a retornar el valor inicial. y dsp con el if hacemos la comparacion de patentes y modificamos el valor de autoABuscar con el auto econtrado.

//2) venderAuto: usamos la funcion de buscarAuto para filtrar el objeto, y le cambiamos el valor a la propiedad vendido.

//3) autosParaLaVenta: en autos para la venta filtramos el objeto de autos con el .filter()y este nos va a devolver un auto, que cumpla con la condicion del return. recorda que el "!" es una negación.

//4) autosNuevos: en autos nuevos, usamos la funcionalidad de autosParaLaVenta para filtrar los que esten disponibles para la venta, y hacemos un segundo filter, para filtrar los menores a 100km.

//5) listaDeVentas: filtramos el objeto y devolvemos los autos vendidos (para usar el console.log, cambiar en vendido: false por true para que muestre el precio por consola). de esos autos filtrados, los recorremos con .map() y devolvemos el precio de los autos vendidos.



//1) console.log(concesionaria.buscarAuto("JJK116"))

//2) console.log(concesionaria.venderAuto("APL123"))

//3) console.log(concesionaria.autosParaLaVenta())

//4) console.log(concesionaria.autosNuevos())

//5) console.log(concesionaria.listaDeVentas())

//6)console.log(concesionaria.totalDeVentas())



