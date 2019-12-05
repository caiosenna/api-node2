const Persona  = require("../models/Persona")
module.exports ={



    async show(req,res) {
        try {
            const {personaId} = req.params

            const personaExist = await Persona.findById({_id: personaId})
            if (!personaExist) {
                return res.status(401).json({error:"Persona não cadastrada"})
            }


            const personas = await Persona.find({
                _id: personaId
            })
           
            return res.status(200).json({personas})


        } catch(error) {
            console.log(error)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }
    },



    async list(req,res) {
        try {
            const personas = await Persona.find()
            
            res.status(200).json({personas})


        } catch(error) {
            console.log(error)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }
    },




    async create(req,res) {
        try {
            const { owner, name, sex, age, role, where_works, scolarship, comunication_means, dreans, problems, company_help, 
            company_workers, company_role, image
            
            } = req.body
        
        
            const persona = await Persona.create( { owner, name, sex, age, role, where_works, scolarship, comunication_means, 
                dreans, problems, company_help, 
                company_workers, company_role, image 
            })

             
    
            return res.status(201).json({persona})
        } catch(error) {

            console.log(error)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }


    },
    
    
    async update(req,res) {
        try {
            const {  name, sex, age, role, where_works, scolarship, comunication_means, dreans, 
                problems, company_help, 
                company_workers, company_role, image  
            } = req.body


            const { personaId } = req.params


            const personaExist = await Persona.findById({_id: personaId})
            if (!personaExist) {
                return res.status(401).json({error:"Não é possível atualizar uma persona não cadastrada"})
            }
            const persona = await Persona.findByIdAndUpdate({
                _id: personaId
            },{
                name, sex, age, role, where_works, scolarship, 
                comunication_means, dreans, problems, company_help, 
                company_workers, company_role, image
            },{
                new:true

            })
            
    
            return res.status(200).json({persona})
        } catch(err) {

            console.log(err)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }
    },


    async delete(req,res) {
        try {
            const {personaId}  = req.params

            
            const personaExist = await Persona.findById({_id: personaId})
            if (!personaExist) {
                return res.status(401).json({error:"Não é possível deletar uma persona não cadastrada"})
            }


            const persona = await Persona.findByIdAndDelete({ _id: personaId })
            
    
            return res.status(201).json({persona})
        } catch(err) {

            console.log(err)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }
    },



}