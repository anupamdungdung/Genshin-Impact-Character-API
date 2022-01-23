import mongoose from 'mongoose'

const characterData = mongoose.Schema({
    name: String,
    title:String,
    slug: String,
    description: String,
    gender:String,
    birthday: String,
    rarity: Number,
    vision: String,
    weapon: String,
    obtain: String,
    imageUrl: String
})

const CharacterData = mongoose.model('CharacterData',characterData)

export default CharacterData;