import  express  from "express";
import {matchGoals,playerLoad,playerSort,playerGoal,searchGoals,deleteById,searchByLetter,updatePlayer} from "../controllers/user.controllers.js";

const PlayerRouter = express.Router()


PlayerRouter.post("/", playerLoad)
PlayerRouter.get("/",playerSort )
PlayerRouter.get("/goal",playerGoal )
PlayerRouter.get("/:goals",searchGoals )
PlayerRouter.get("/match/:mini/:maxi",matchGoals )
PlayerRouter.delete("/delete/:id",deleteById )
PlayerRouter.get("/search/:letter",searchByLetter )
PlayerRouter.put("/update/:id",updatePlayer )



export default PlayerRouter