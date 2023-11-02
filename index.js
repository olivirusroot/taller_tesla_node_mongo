//0. Importo express
import express from "express";
import connectMongo from "./config/db.js" ;

//1. creo la app
const app = express ()


//4. CREO LAS RUTAS
const router= express.Router();
const routerBase= express.Router();


//5. RUTA PARA GET EN /PRUEBAS
    router.get ('/prueba',(req,res)=>
    {
        res.json({"msg":"Estoy Funcionando"})
    }
    )

//6. RUTA PARA POST EN /PRUEBAS

    router.post ('/messi',(req,res)=>
    {
        res.json({"msg":"Messi tiene x balones"})
    }
    )

//7. RUTA PARA NO APIS
    routerBase.post ('/prueba_base',(req,res)=>
    {
        res.json({"msg":"base"})
    }
    )

connectMongo()

//3. CREO EL PATH PRINCIPAL O LOS PATHS
app.use('/api', router)
app.use('/base', routerBase)


//2 . ESCUCHO EL SERVIDOR
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
}
)