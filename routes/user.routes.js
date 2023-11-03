import  express  from "express";
import usersModel from "../models/users.model.js";
import {userGet, userPost} from "../config/controllers/user.controllers.js";

const userRouter = express.Router()

//ejemplo de como logro cargar una funcion de user.controllers.js
userRouter.get("/", userGet)
//ejemplo de como logro cargar una funcion de user.controllers.js
userRouter.post("/", userPost)
//poniendo toda la logica en el mismo router
userRouter.put("/update/:id", async (req, res)=>{
    try {
    let dataForUpdate = req.body
    let idForUpdate= req.params.id
    let userUpdate = await usersModel.findByIdAndUpdate(idForUpdate,dataForUpdate)
    if (userUpdate){
        return res.json({msg: "actuaulizado"})
    } else{
        return res.json({msg: "No actuaulizado"})
    }
        
    } catch (e) {
        return  res.json({error: e})
    }
    
})

userRouter.post("/updateForName/:name", async (req, res)=>{
    try {
    let dataForUpdate = req.body
    let nameForUpdate= req.params.name
    let userUpdate = await usersModel.findOneAndUpdate({name:nameForUpdate},dataForUpdate)
    
    if (userUpdate){
        return res.json({msg: "actuaulizado"})
    } else{
        return res.json({msg: "No actuaulizado"})
    }


    } catch (e) {
        return  res.json({error: e}) 
    }
    
    
})

userRouter.delete("/delete/:id", async (req, res)=>{
    try {
    let idForDelete= req.params.id
    let userDelete = await usersModel.findByIdAndDelete(idForDelete)
    if (userDelete){
        return res.json({msg: "Eliminado"})

    }else{
        return res.json({msg: "No Eliminado"})
    }
       
    } catch (e) {
        return  res.json({error: e}) 
    }
    
    
})



export default userRouter