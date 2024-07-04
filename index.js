const express = require ('express')
const { Client } = require('pg')
require('dotenv').config()

const client =  new Client({
    host: process.env.host,
    port:process.env.port,
    user:process.env.user,
    password: process.env.password,
    database: process.env.database,
})


const app = express()

const connectDB = async () => {
    client
    .connect()
    .then(() => {
        console.log('a conexão funcionou');
    }).catch((err) => {
        console.error ('erro ao conectar api')
    });
};
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