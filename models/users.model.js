import mongoose from "mongoose";

//creamos la estructura de la base de datos
const Schema= mongoose.Schema;

const footballModel= new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    active_years: {
        type: String,
        required: true
    },
    goals: {
        type: Number,
        required: true
    },
    matches: {
        type: Number,
        required: true
    },
    goals_per_match: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    }
});


export default mongoose.model("user", footballModel)
