import  express  from "express";
import {playerLoad,playerSort,playerGoal,searchGoals,matchGoals,deleteById,searchByLetter,updatePlayer} from "../controllers/user.controllers.js";

const PlayerRouter = express.Router()


PlayerRouter.post("/", playerLoad)
PlayerRouter.get("/",playerSort )
PlayerRouter.get("/goal",playerGoal )
PlayerRouter.get("/:goals",searchGoals )
PlayerRouter.get("/match",matchGoals )
PlayerRouter.delete("/delete/:id",deleteById )
PlayerRouter.get("/search/:letter",searchByLetter )
PlayerRouter.put("/update/:id",updatePlayer )



export default PlayerRouter