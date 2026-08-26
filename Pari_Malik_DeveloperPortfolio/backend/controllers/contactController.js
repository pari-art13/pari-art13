const Contact=require("../models/Contact");
exports.createContact=async(req,res,next)=>{
 try{
  let {name,email,subject,message}=req.body||{};
  name=(name||"").trim(); email=(email||"").trim().toLowerCase(); subject=(subject||"").trim(); message=(message||"").trim();
  if(!name||!email||!subject||!message)return res.status(400).json({success:false,message:"All fields are required."});
  if(name.length<2||name.length>60)return res.status(400).json({success:false,message:"Name must be 2-60 characters."});
  if(subject.length>120)return res.status(400).json({success:false,message:"Subject is too long."});
  if(message.length<10||message.length>1000)return res.status(400).json({success:false,message:"Message must be 10-1000 characters."});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return res.status(400).json({success:false,message:"Please enter a valid email."});
  if(!require("mongoose").connection.readyState)return res.status(503).json({success:false,message:"Database is not connected."});
  await Contact.create({name,email,subject,message});
  res.status(201).json({success:true,message:"Message received successfully."});
 }catch(err){next(err)}
};
