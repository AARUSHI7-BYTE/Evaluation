import { supabase } from "../config/supabase";
export const signup = async((req,res)=>{
    const {name,email,password,role}=req.body;
    if(!["customer","owner","driver"].includes(role)){
        return res.status(400).json({error:"invalid"})
    }
    const {data,error}=await su
})