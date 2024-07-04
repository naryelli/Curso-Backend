const express = require ('express')

require('dotenv').config()
const connectDB = require('./db')

const app = express()

connectDB()

app.get('/test-api', function(req, res){
    res.send('nossa api ta funcionando')
})

app.listen(8000)


// localhost:8000/test-api













// function filtrarPares(arr){
//   nova_arr = []
//   for(let i=0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         nova_arr.push(arr[i])
//     }
//   }


//     return nova_arr
// }

// arr= [1,2,3,4,5]
// resultado = filtrarPares(arr)
// console.log(resultado)