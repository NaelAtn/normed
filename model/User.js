const mongoose = require("mongoose") ;

const {Schema , model } = mongoose ;

const UserSchema = new Schema ({

    firstname : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
        
       },
    password : {
        type: String,
        required: true,
        } ,
    isAdmin : {
        type : Boolean}   ,
        
    favorites : {
        type : Array
    }       
})



module.exports = User = model('user', UserSchema)