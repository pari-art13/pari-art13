require("dotenv").config();
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const contactRoutes=require("./routes/contactRoutes");

const app=express();
app.use(express.json({limit:"20kb"}));
app.use(cors({origin:process.env.CLIENT_URL||true}));
app.get("/health",(req,res)=>res.json({success:true,status:"ok",service:"Pari Malik Portfolio API"}));
app.use("/api/contact",contactRoutes);
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({success:false,message:"Internal server error."})});

const PORT=process.env.PORT||5000;
async function start(){
 if(!process.env.MONGODB_URI){console.warn("MONGODB_URI is not configured. API will run but contact storage is disabled.");return app.listen(PORT,()=>console.log(`API running on ${PORT}`));}
 await mongoose.connect(process.env.MONGODB_URI);
 console.log("MongoDB connected.");
 app.listen(PORT,()=>console.log(`API running on ${PORT}`));
}
start().catch(err=>{console.error("Startup error:",err);process.exit(1)});
