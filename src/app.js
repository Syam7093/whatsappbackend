import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import helmet from "helmet"
import mongoSanitize from "express-mongo-sanitize"
import cookieParser from "cookie-parser"
import compression from "compression"
import fileUpload from "express-fileupload"
import cors from "cors"
dotenv.config()
const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(mongoSanitize())
app.use(cookieParser())
app.use(compression())
app.use(fileUpload({
    useTempFiles:true 
}))
// app.use(cors({
//     origin:"http://localhost:3000"
// }))
// app.use(cors())
app.post("/test", (req, res) => {
    res.send(req.body)
})

export default app