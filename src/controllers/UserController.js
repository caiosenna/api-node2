const User = require("../models/User")
module.exports ={



    async show(req,res) {
        try {
            const {userId} = req.params

            const userExist = await User.findById({_id: userId})
            if (!userExist) {
                return res.status(401).json({error:"Usuário não cadastrado"})
            }


            const users = await User.find({
                _id: userId
            })
           
            return res.status(200).json({users})


        } catch(error) {
            console.log(error)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }
    },



    async list(req,res) {
        try {
            const users = await User.find()
            
            res.status(200).json({users})


        } catch(error) {
            console.log(error)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }
    },




    async create(req,res) {
        try {
            const { nome , email , cargo } = req.body
        
            const userExist = await User.find({email})
            if (userExist){
                return res.status(401).json({error:"Já existe um usuário com este e-mail"})
            }
            const user = await User.create( { nome, email, cargo })

            
    
            return res.status(201).json({user})
        } catch(error) {

            console.log(error)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }


    },
    
    
    async update(req,res) {
        try {
            const {  nome, email, cargo  } = req.body
            const { userId } = req.params

            const userExist = await User.findById({_id: userId})
            if (!userExist) {
                return res.status(401).json({error:"Não é possível atualizar um usuário não cadastrado"})
            }
            const user = await User.findByIdAndUpdate({
                _id: userId
            },{
                nome,
                email, 
                cargo
            },{
                new:true

            })
            
    
            return res.status(200).json({user})
        } catch(err) {

            console.log(error)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }
    },


    async delete(req,res) {
        try {
            const { userId } = req.params

            
            const userExist = await User.findById({_id: userId})
            if (!userExist) {
                return res.status(401).json({error:"Não é possível deletar um usuário não cadastrado"})
            }


            const user = await User.findByIdAndDelete({ _id: userId })
            
    
            return res.json({user})
        } catch(err) {

            console.log(error)
            return res.status(500).json({msg:"Problemas com o Servidor"})
        }
    },



}