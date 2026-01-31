import { supabase } from "../config/supabase";
export const signup = (async(req,res)=>{
    const {name,email,password,role}=req.body;
    if(!["customer","owner","driver"].includes(role)){
        return res.status(400).json({error:"invalid"})
    }
    const {data,error}= await supabase
    .from("users")
    .insert([{name,email,password,role}]);
    if(error){
        return res.status(500).json({error:error.message});
    }
    return res.status(201).json({message:"user created",data});
})