const express=require("express")


const app = express()

app.get("/", (req, res) => {
    res.send("welcome to whats app")
})

export default app