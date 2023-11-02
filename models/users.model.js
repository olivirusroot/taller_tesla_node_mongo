import mongoose from "mongoose";

//creamos la estructura de la base de datos
const Schema= mongoose.Schema;
const userModel = new Schema({
    name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,

    }
})

export default mongoose.model("user", userModel)
