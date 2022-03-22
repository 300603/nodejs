function hola(nombre, miCallback) {
    setTimeout (function () {
        console.log ("hola," + nombre);
        miCallback();
    },1000);
}

function adios(nombre, otroCallback){
    setTimeout (function(){
        console.log ("adios", nombre);
        otroCallback();
    }, 1000);
}
console.log ("Iniciando proceso... ");
hola("laura", function () {
    adios ("laura ", function() {
        console.log ("Terminando proceso... ");

    })
   
});