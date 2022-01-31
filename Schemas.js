const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MattressCaseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imgSrc: String
})

const MattressLayerSchema = new Schema({
    title: String,
    description: String,
    thickness: Number,
    price: Number,
    imgSrc: String
});

const MattressBaseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imgSrc: String
});

const MattressSchema = new Schema({
    measurerRequired: Boolean,
    form: String,
    size: String,
    case: MattressCaseSchema,
    side1: [MattressLayerSchema],
    side2: [MattressLayerSchema],
    base: MattressBaseSchema,
    aerator: Boolean,
    edgingTape: Boolean,
    arms: Boolean,
    reinforcementWithPressedFelt: Boolean
});

const UserSchema = new Schema({
    login: String,
    password: String,
    fullName: String,
    phone: String,
    coefficient: Number,
    role: Number
});

const OrderSchema = new Schema({
    mattress: MattressSchema,
    user: UserSchema,
    loggedIn: Boolean,
    phone: String,
    date: Date,
    totalSum: Number
});

module.exports = {
    MattressCaseSchema,
    MattressLayerSchema,
    MattressBaseSchema,
    MattressSchema,
    UserSchema,
    OrderSchema
}