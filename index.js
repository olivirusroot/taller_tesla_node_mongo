import express from "express";
import connectMongo from "./config/db.js" ;
import PlayerRouter from "./routes/user.routes.js";
//import footballModel from "./models/users.model.js";
import dotenv from "dotenv";


dotenv.config()

//1. creo la app
const app = express ()
connectMongo()
app.use(express.json())


//3. CREO EL PATH PRINCIPAL O LOS PATHS
app.use('/user',PlayerRouter )



//2 . ESCUCHO EL SERVIDOR
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
}
)