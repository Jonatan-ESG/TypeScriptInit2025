interface Usuario {
    nombre: string
    edad: number
    activo: boolean
    correo?: string
    // saludar: ()=>string
}

interface CRUD {
    crear: (registro: any) => any
    actualizar: (registro: any, id: string) => any
    elminar: (id: string) => any
    leer: () => any[]
}

interface InformacionLogIn {
    correo: string
    clave: string
    recaptcha: boolean
}

const usuarioUno: Usuario = {
    nombre: 'Juan',
    edad: 15,
    activo: true,
}

function loguear(informacionLogin: InformacionLogIn) {
    console.log(informacionLogin)
}
