const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/users.routes")
const { noteRouter } = require("./routes/notes.routes")
const { perRouter } = require("./routes/pers.routes")
const { productRouter } = require("./routes/products.routes")
require("dotenv").config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/note",noteRouter)
app.use("/pro",productRouter)
app.use("/per",perRouter)


app.get("/home",(req,res)=>{

    res.send({
        message:"api is working now"
    })
})
app.post("/ister",async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password
    resp.send({
        message:"going"
    })
    resp.send(result);
})

app.listen(port,async()=>{

    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }


    console.log("Server is running on port number",port)

})