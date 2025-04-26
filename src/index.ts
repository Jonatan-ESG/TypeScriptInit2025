// Arreglos tipados
let numeros: number[] = [1, 2, 3]
numeros.push(4)

// [1, 2, 3, 4]

let nombres: Array<string> = ['Juan', 'Luis', 'Pedro']

// Tuplas
let persona: [string, number, boolean] = ['Juan', 25, true]

persona[2] = false

//Enums
enum ColorSemaforo {
    Rojo,
    Verde,
    Amarillo,
}

let estadoSemaforo: ColorSemaforo = ColorSemaforo.Amarillo

console.log(estadoSemaforo)

enum EstadoPedido {
    Nuevo = 'NewOrder',
    Procesando = 'InProgress',
    Completado = 'Completed',
}

let estado: EstadoPedido = EstadoPedido.Completado
console.log(estado)

enum HttpStatus {
    BadRequest = 400,
    Forbiden = 503,
    Success = 200,
    Created = 201,
}

let responseStatus: HttpStatus = HttpStatus.Created
console.log(responseStatus)
// Union Types

function imprimir(valor: string | number) {
    console.log(valor)
}

function calcularLongitud(valor: string | any[]): number {
    return valor.length
}
