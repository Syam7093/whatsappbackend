const dotenv=require("dotenv").config()
import app from "./app"
//dotenv config()
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server listening the port Number ${PORT}`)
})
