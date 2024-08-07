import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

// const app = express();
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error in MONGODB connection !!!", error);
  });

/* import { express } from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("Error",(error)=>{
        console.log("Error", error);
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`APP is Listening on port : ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
