var nombre = prompt ('¿Cuál es tu nombre?')

class Juego {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 20;
  }
  vender() {
    if (this.cantidad > 0) {
      this.cantidad--;
    } else {
      console.log("No hay más stock!");
    }
  }

  agregarIva() {
    this.precio = this.precio * 1.22;
  }

  agregarStock(cantidad){
    this.cantidad = this.cantidad + cantidad;
  }
}

const gowRagnarok = new Juego("God of War Ragnarok", 4000);
const pkmnSyv = new Juego("Pokémon Scarlet & Violet", 4500);

const stockJuegos = [gowRagnarok, pkmnSyv];
console.log(stockJuegos);

for(let juegos of stockJuegos) {
    console.log (juegos);
}

function aumentarStockGow(arrayJuegos) {
    for(let juego of arrayJuegos) {
        if(juego.nombre === "God of War Ragnarok") {
            juego.agregarStock(50);
        }
    } 
}

aumentarStockGow(stockJuegos);
console.log(stockJuegos);