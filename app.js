const mongoose = require("mongoose");
const express = require("express");
const mattressRouter = require("./routers/mattress/MattressesRouter");
const usersRouter = require("./routers/user/UsersRouter");
const ordersRouter = require("./routers/order/OrdersRouter");
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}));

mongoose.connect("mongodb://localhost:27017/mattexdb",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    function(err){
        if(err) return console.log(err);
        app.listen(3030, function(){
            console.log("Сервер ожидает подключения...");
        });
});

app.use("/api/mattresses", mattressRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);