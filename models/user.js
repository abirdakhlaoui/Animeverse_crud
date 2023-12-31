const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        birth: {
            type: Date,
            required: true
        },
        role: {
            type: String,
            default: "client"
        }
    }
)

const User = mongoose.model("users", userSchema)

module.exports = User