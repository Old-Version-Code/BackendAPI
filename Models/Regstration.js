const mongoose = require('mongoose');


const Post = mongoose.model('Regstration',{
    username:{type:String},
    fullname:{type:String},
    email:{type:String},
    password:{type:String},
    gender:{type:String},
    profile:{type:String},
    enble:{type:boolean}
})

module.exports = Regstration;