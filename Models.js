const mongoose = require("mongoose");
const schemas = require("./Schemas");

let MattressCase = mongoose.model("MattressCase", schemas.MattressCaseSchema);
let MattressLayer = mongoose.model("MattressLayer", schemas.MattressLayerSchema);
let MattressBase = mongoose.model("MattressBase", schemas.MattressBaseSchema);
let Mattress = mongoose.model("Mattress", schemas.MattressSchema);
let Order = mongoose.model("Order", schemas.OrderSchema);
let User = mongoose.model("User", schemas.UserSchema);

module.exports = {
    MattressCase,
    MattressLayer,
    MattressBase,
    Mattress,
    Order,
    User
}