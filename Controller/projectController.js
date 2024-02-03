const projects=require('../Models/projectModel')

exports.addProjects=async(req,res)=>{
    console.log("Inside API");
    const {title,overview,language,website,github}=req.body
    const projectImage=req.file.filename
    const userId=req.payload
    try{
        const existingProject=await projects.findOne({github})
        if(existingProject){
            res.status(406).json("project  already exist")
        }else{
            const newProject= new projects({
                title,language,overview,github,website,projectImage,userId 
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
        res.status(401).json(err)
    }
    res.status(200).json("add project recieved")
}