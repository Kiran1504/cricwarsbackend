import mongoose, { Schema } from "mongoose";

// const TeamSchema = new Schema({
//     rcb: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     csk: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     mi: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     dc: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     kkr: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     rr: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     srh: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     pbks: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     lsg: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ],
//     gt: [
//         {
//             id: {
//                 type: Number
//             },
//             name: {
//                 type: String
//             },
//             rating: {
//                 type: Number
//             },
//             price: {
//                 type: Number
//             },
//             img: {
//                 type: String
//             }
//         }
//     ]
// })
const TeamSchema = new Schema({
    teamName: {
        type: String
    },
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
            }
        }
    ]
})

export const Team = mongoose.model('Team', TeamSchema);