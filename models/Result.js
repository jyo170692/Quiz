const mongoose =require('mongoose')

const ResultSchema = new mongoose.Schema({
    first:
    {
        type:String,
        
    },
    second:
    {
        type:String,
        
    },
    third:
    {
        type:String,
       
    },
    fourthh:
    {
        type:String,
        
    },
    fifth:
    {
        type:String,
        
    },
    sixth:
    {
        type:String,
        
    },
    seventh:
    {
        type:String,
       
    },
    e:
    {
        type:String,
       
    },
    ninth:
    {
        type:String,
       
    },
    tenth:
    {
        type:String,
        
    },
    i:
    {
      type:String,
        
    }

    
},{timestamps:true})

const ResultModels = new mongoose.model('Result',ResultSchema)

module.exports =ResultModels