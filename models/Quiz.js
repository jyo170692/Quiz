const mongoose =require('mongoose')

const QuizSchema = new mongoose.Schema({
    first:
    {
        type:String,
        required:true,
    },
    second:
    {
        type:String,
        required:true,
    },
    third:
    {
        type:String,
        required:true,
    },
    fourthh:
    {
        type:String,
        required:true,
    },
    fifth:
    {
        type:String,
        required:true,
    },
    sixth:
    {
        type:String,
        required:true,
    },
    seventh:
    {
        type:String,
        required:true,
    },
    e:
    {
        type:String,
        required:true,
    },
    ninth:
    {
        type:String,
        required:true,
    },
    tenth:
    {
        type:String,
        required:true,
    }

    
},{timestamps:true})

const QuizModels = new mongoose.model('Quiz',QuizSchema)

module.exports =QuizModels