function hola(nombre, miCallback) {
    setTimeout (function () {
        console.log ("hola," + nombre);
        miCallback();
    },1000);
}

function hablar (callbackHablar){
    setTimeout (function()
    {
        console.log ("bla bla bla...");
        callbackHablar();
    })
}

function adios(nombre, otroCallback){
    setTimeout (function(){
        console.log ("adios", nombre);
        otroCallback();
    }, 1000);
}


console.log ("Iniciando proceso... ");
hola("laura", function (nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios (nombre , function() {
                    console.log ("Terminando proceso... ");
                });   
            });
        });
    });
});