const { Router } = require("express")
const { signup, login } = require("../controller/user.colnrell")

const userRouter = Router()
userRouter.post("/signup",signup)
userRouter.post("/login",login)

module.exports =userRouter;
