import usersModel from "../../models/users.model.js"

export const userGet = async (req, res)=>{
    let users = await usersModel.find()
    res.send(users)
}


export const userPost= async (req, res)=>{
    try {
        let userData = req.body
        let newUser = await usersModel.create(userData)
        res.send(newUser)
    } catch (e) {
        return res.json({error: e})
    }
    
}

