const { Router } = require("express");
const { signup } = require("../controller/user.colnrell");

const userRouter = Router();
userRouter.post("/signup", signup);

module.exports = userRouter;
