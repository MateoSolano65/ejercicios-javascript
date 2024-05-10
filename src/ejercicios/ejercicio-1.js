//  1. Contraseña válida

// Escribir una función llamada `contrasenaValida` que reciba 
// un string y retorne `true` si el string 
// es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar `false`.

const contrasenaValidas = ['eoZiugBf&g9','2Fj(jjbFsuj'];

const contrasenaValida = (password)=>{
    return contrasenaValidas.includes(password);
}

// const contrasenaValida = (palabra)=>{
//     if (palabra === '2Fj(jjbFsuj' ) {
//         return true
//     } else {
//         if (palabra === 'eoZiugBf&g9') {
//             return true
//         }
//     }
//     return false
// }

// escribe tu respuesta acá

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false
