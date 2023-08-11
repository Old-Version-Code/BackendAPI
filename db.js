const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://myloverajput99:rzSdz9Lej1EWlv6s@blogapp.ln3e2og.mongodb.net/',{
    UseNewUrlParser:true,
    UseUnifiedTopology:true,
    family:4,
},
 (err)=>{
    if(err){
        console.log('Database has ended with Error' + err)
    }else{
        console.log('Conection is  Succssfull by Satendra')
    }
})

module.exports = mongoose;
