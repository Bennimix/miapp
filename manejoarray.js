/* console.log("Hola mundo"); */

let array = [1,2,3,4];


let Player = {
    vida: [0, 100], // [vida actual, vida maxima]
    damage: [40, 60]
}

let enemigos = {

    puca: {
        vida: [0, 200],
        damage: [10, 40]
    },


}

function CargarDatos(modelo){

    if (modelo.vida){

        modelo.vida[0] = vida_modelo = modelo.vida[1] // cargar dato de vida actual
        console.log(modelo.vida[0]+"/"+modelo.vida[1]);

    } else{

        console.log("Es un enemigo");
    }
    


}

CargarDatos(Player)








