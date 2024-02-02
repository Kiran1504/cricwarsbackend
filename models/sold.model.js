import mongoose, { Schema } from "mongoose";

const TeamSchema = new Schema({
    players: [
        {
            id: {
                type: Number
            },
            name: {
                type: String
            },
            rating: {
                type: Number
            },
            price: {
                type: Number
            },
            img: {
                type: String
            },
            team: {
                type: String
            }
        }
    ]
})

export const Player = mongoose.model('Player', TeamSchema);