import mongoose from "mongoose";

//nos conectamos a la base de datos mirar atlas creamos repasonode
const connectMongo = async ()=>{
    await mongoose.connect(process.env.URI_MONGO)
    try {
        
        console.log("conectado ok")
    } catch (error) {
        console.log("error")
        
    }
}


//exportamos la funcion para poderla usar en otros lados
export default connectMongo