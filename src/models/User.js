const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        cidade: {
            type: String,
        },
        idade: {
            type: Number,
        }
    }
)

module.exports = mongoose.model("User",UserSchema)