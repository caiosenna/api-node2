const User = require("../models/User")
module.exports ={



    async show(req,res) {
        try {
            const {userId} = req.params
            const users = await User.find({
                _id: userId
            })
            console.log(users)
            res.json({users})


        } catch(error) {
            console.log(error)
            res.json({msg:"Problemas com o Servidor"})
        }
    },



    async list(req,res) {
        try {
            const users = await User.find()
            console.log(users)
            res.json({users})


        } catch(error) {
            console.log(error)
            res.json({msg:"Problemas com o Servidor"})
        }
    },




    async create(req,res) {
        try {
            const { nome , cidade , idade } = req.body
            const user = await User.create( { nome,cidade,idade})
            console.log(user)
    
            return res.json({user})
        } catch(error) {

            console.log(error)
            res.json({msg:"Problemas com o Servidor"})
        }




    },
    
    
    async update(req,res) {
        try {
            const { nome , cidade , idade } = req.body
            const { userId } = req.params
            const user = await User.findByIdAndUpdate({
                _id: userId
            },{
                nome,
                cidade,
                idade
            },{
                new:true

            })
            console.log(user)
    
            return res.json({user})
        } catch(err) {

            console.log(error)
            res.json({msg:"Problemas com o Servidor"})
        }
    },


    async delete(req,res) {
        try {
            const { userId } = req.params
            const user = await User.findByIdAndDelete({ _id: userId })
            console.log(user)
    
            return res.json({user})
        } catch(err) {

            console.log(error)
            res.json({msg:"Problemas com o Servidor"})
        }
    },



}