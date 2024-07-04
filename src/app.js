import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGION,
    credentials:true,
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
export default app;
