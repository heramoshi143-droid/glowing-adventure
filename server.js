import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();
const app=express();app.use(cors());app.use(express.json({limit:"2mb"}));
const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
app.get("/health",(req,res)=>res.json({ok:true,service:"WORLD AI"}));
app.post("/api/chat",async(req,res)=>{try{
 const {messages=[],tone="friendly",language="en"}=req.body||{};
 const system=`You are WORLD AI, a helpful assistant. Reply in ${language==="ur"?"Urdu":"the language used by the user"}. Tone: ${tone}. Be accurate and explain clearly.`;
 const completion=await client.chat.completions.create({model:process.env.OPENAI_CHAT_MODEL||"gpt-4o-mini",messages:[{role:"system",content:system},...messages.filter(m=>["user","assistant"].includes(m.role)).map(m=>({role:m.role,content:String(m.content)}))]});
 res.json({reply:completion.choices[0]?.message?.content||"I could not create a reply."});
 }catch(e){console.error(e.message);res.status(500).json({error:"AI request failed. Check server configuration."})}});
app.post("/api/images",async(req,res)=>{try{
 const {prompt}=req.body||{};if(!prompt)return res.status(400).json({error:"Prompt required"});
 const result=await client.images.generate({model:"gpt-image-1",prompt,size:"1024x1024"});
 const b64=result.data?.[0]?.b64_json;if(!b64)return res.status(502).json({error:"No image returned"});
 res.json({imageUrl:`data:image/png;base64,${b64}`});
 }catch(e){console.error(e.message);res.status(500).json({error:"Image generation failed. Check API access and billing."})}});
const port=process.env.PORT||3000;app.listen(port,()=>console.log(`WORLD AI backend listening on ${port}`));