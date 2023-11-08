import footballModel from "../models/users.model.js";

//Punto 1 creamos la db y el schema

//Punto 2 carga masiva por post
export const playerLoad = async (req, res) => {
  try {
    let userData = req.body;
    let newUser = await footballModel.insertMany(userData);
    res.send(newUser);
  } catch (e) {
    return res.json({ error: e });
  }
};

//punto 3 listar por promedio de goles de mayor a menor solo se muestra nombre y promedio
export const playerSort = async (req, res) => {
  try {
    let newUser = await footballModel
      .find({}, "name goals_per_match -_id")
      .sort({ goals_per_match: -1 });
    res.send(newUser);
  } catch (e) {
    return res.json({ error: e });
  }
};

//punto 4 goleadores (>800 goles)
export const playerGoal = async (req, res) => {
  try {
    let newUser = await footballModel.find({ goals: { $gt: 800 } });
    res.send(newUser);
  } catch (e) {
    return res.json({ error: e });
  }
};

//punto 5 mayor que numero ingresado
export const searchGoals = async (req, res) => {
  try {
    let userData = req.body;
    let goalsForSearch = req.params.goals;
    let newUser = await footballModel.find({ goals: { $gt: goalsForSearch } });
    res.send(newUser);
  } catch (e) {
    return res.json({ error: e });
  }
};

//punto 6 Crear un endpoint para listar futbolistas con entre 500 y 800 partidos ordenados por goles
export const matchGoals = async (req, res) => {
  try {
    const minMatch = 500;
    const maxMatch = 800;
    let newUser = await footballModel
      .find({ matches: { $gte: minMatch, $lte: maxMatch } })
      .sort({ goals: -1 });
    res.send(newUser);
  } catch (e) {
    return res.json({ error: e });
  }
};

//punto 7 Crear un endpoint para eliminar futbolistas,Crea un endpoint que permita eliminar futbolistas de la base de datos utilizando el ID del jugador.
export const deleteById = async (req, res) => {
  try {
    let idForDelete = req.params.id;
    let userDelete = await footballModel.findByIdAndDelete(idForDelete);
    if (userDelete) {
      return res.json({ msg: "Eliminado" });
    } else {
      return res.json({ msg: "No Eliminado" });
    }
  } catch (e) {
    return res.json({ error: e });
  }
};

//Paso 8: Crear un endpoint para listar futbolistas con una letra en su nombre
//Crea un endpoint que reciba una letra como parámetro y liste los futbolistas cuyos nombres contengan esa letra.
export const searchByLetter = async (req, res) => {
  try {
    let letterForSearch = req.params.letter;
    let newUser = await footballModel.find({
      name: { $regex: letterForSearch, $options: "i" },
    });
    res.send(newUser);
  } catch (e) {
    return res.json({ error: e });
  }
};

//Paso 9: Crear un endpoint para actualizar partidos y goles de un jugador
//Crea un endpoint que permita agregar partidos y goles a un futbolista existente en la base de datos utilizando su ID.

export const updatePlayer = async (req, res) => {
  try {
    let dataForUpdate = req.body
    let idForUpdate= req.params.id
    let userUpdate = await footballModel.findByIdAndUpdate(idForUpdate,dataForUpdate)  
    
    if (userUpdate) {
      return res.json({ msg: "actualizado" });
    } else {
      return res.json({ msg: "No actualizado" });
    }
  } catch (e) {
    return res.json({ error: e });
  }
};


