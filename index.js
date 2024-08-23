const express = require('express');
const dbcontent = require("./config/db");
const userRouter = require("./routers/user.rouer")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send({ msg: "start" })
})
app.use("/user", userRouter)
app.listen(8520, () => {
    console.log("listening  on port 8090");
    dbcontent()
})
