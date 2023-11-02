import mongoose from "mongoose";

//nos conectamos a la base de datos mirar atlas creamos repasonode
const connectMongo = async ()=>{
    await mongoose.connect("mongodb+srv://oliveros105:W1C6ngMTaQfhSK3t@cluster0.yadeljh.mongodb.net/repasonode?retryWrites=true&w=majority")
    try {
        
        console.log("conectado ok")
    } catch (error) {
        console.log("error")
        
    }
}


//exportamos la funcion para poderla usar en otros lados
export default connectMongo