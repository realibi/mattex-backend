const mongoose = require("mongoose");
const express = require("express");
const mattressRouter = require("./routers/mattress/MattressesRouter");
const usersRouter = require("./routers/user/UsersRouter");
const ordersRouter = require("./routers/order/OrdersRouter");
const fileRouter = require("./routers/file/FileRouter");
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}));

const CONNECTION_STRING = `mongodb+srv://realibi:intersekt01@cluster0.8rc2y.mongodb.net/?retryWrites=true&w=majority`;
//const CONNECTION_STRING = `mongodb://localhost:27017/mattexdb`;

mongoose.connect(CONNECTION_STRING,
    // {
    //     useUnifiedTopology: true,
    //     useNewUrlParser: true
    // },
    function(err){
        if(err) return console.log(err);
        app.listen(3030, function(){
            console.log("Сервер ожидает подключения...");
        });
});

app.use("/api/mattresses", mattressRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/file", fileRouter);
