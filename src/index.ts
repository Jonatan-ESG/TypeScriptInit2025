// Sin POO
let nombre = 'Pedro Gózalez'

function saludar(nombre: string): void {
    console.log(`Hola soy: ${nombre}`)
}

saludar(nombre)

// Con POO

class Persona {
    nombre: string

    constructor(nombre: string) {
        this.nombre = nombre
    }

    saludar() {
        console.log(`Hola soy: ${this.nombre}`)
    }
}

const pedro = new Persona('Pedro Goméz')

pedro.saludar()
