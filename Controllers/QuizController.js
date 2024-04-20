const QuizModels = require("../models/Quiz")
const ResultModels = require("../models/Result")

class QuirController
{
  
    static home = async(req,res)=>
    {
        try
        {
          res.render('index')
        }
        catch(error)
        {
            console.log(error)
        }
    }
    static submit =async(req,res)=>
    {
    
              try 
                {
                    var i = 0; 
                    
                    const id = await ResultModels.findOne()
                    const data = await QuizModels.findOne()
                    // console.log(id.id)
                   
                     if(data.first==id.first)
                     {
                        i++
                         console.log('first')
                        console.log(i)
                       
                     }
                     if(data.second==id.second)
                     {
                         i++;
                         console.log('second')
                       
                     }
                     if(data.third==id.third)
                     {
                         i++;
                        //  console.log('third')
                       
                     }
                     if(data.fourthh==id.fourthh)
                     {
                         i++;
                        //  console.log('fourthh')
                       
                     }
                     if(data.fifth==id.fifth)
                     {
                         i++;
                        //  console.log('fifth')
                       
                     }
                     if(data.sixth==id.sixth)
                     {
                         i++;
                        //  console.log('sixth')
                       
                     }
                     if(data.seventh==id.seventh)
                     {
                         i++;
                        //  console.log('seventh')
                       
                     }
                     if(data.e==id.e)
                     {

                         i++;
                        //  console.log('eight')
                       
                     }
                     if(data.ninth==id.ninth)
                     {
                         i++;
                        //  console.log('ninth')
                       
                     }
                     if(data.tenth==id.tenth)
                     {
                         i++;
                        //  console.log('tenth')
                       
                     }
                     console.log(i)
                 
                     const update =await ResultModels.findByIdAndUpdate(id.id,
                        {
                            i:i
                            
                        })
                        console.log(i)
                        
                        await update.save()
                        res.redirect('/view')
                } 
                catch (error) 
                {
                    console.log(error)
                }
            
       
    }
    static insert =async(req,res)=>
    {
        try
        {

            const d = await ResultModels.deleteMany()
            
            const {first,second,third,fourthh,fifth,sixth,seventh,e,ninth,tenth} =req.body
                    
            
                   const result = new ResultModels(
                    {
        
                       first:req.body.first,
                       second:req.body.second,
                       third:req.body.third,
                       fourthh:req.body.fourthh,
                       fifth:req.body.fifth,
                       sixth:req.body.sixth,
                       seventh:req.body.seventh,
                       e:req.body.e,
                       ninth:req.body.ninth,
                       tenth:req.body.tenth,
                       i:'0'
                    })
                    await result.save()
                    
                    res.redirect('/submit') //login is router name
                 
                
            
        }
        catch(error)
        {
           console.log(error)
        }
    }
    static view = async(req,res)=>
    {
        try
        {
            const result = await ResultModels.findOne()
            const data = await QuizModels.findOne()
            // console.log(data)
            // console.log(result)
            res.render('view',{data:data,result:result})
        }
        catch(error)
        {
            console.log(error)
        }
    }
}
module.exports=QuirController