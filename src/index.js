
import app from "./app.js"
//dotenv config()
const PORT = process.env.PORT || 8000
console.log(process.env.NODE_ENV)
app.listen(PORT, () => {
    console.log(`server listening the port Number ${PORT}`)
})
