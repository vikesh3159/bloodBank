const express=require("express");
const dotenv=require("dotenv");
const colors=require("colors");
const morgan=require("morgan");
const cors=require("cors");
const connectDB = require("./config/db");
const app=express();

//dot config
dotenv.config();//{path:'./config} agar config ke under env file hota to
//connection of mongodb
connectDB();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
 

app.use("/api/v1/test",require("./routes/testRoutes"));
app.use("/api/v1/auth",require("./routes/authRoutes"));

const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`Node server running in ${process.env.DEV_MODE} on port ${process.env.PORT}` );
})