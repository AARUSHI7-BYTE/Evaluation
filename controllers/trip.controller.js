import { supabase } from "../config/supabase";
export const createtrip =(async (req,res)=>{
    const {vehicle_id,passengers}=req.body;
    const {data:vehicle}= await supabase
    .from("vehicles")
    .select("*")
    .eq("id",vehicle_id)
    .single();
    if(!vehicle){
        return res.status(404).json({error:"vehicle not found"});
    }
    if(passengers>4){
        return res.status(400).json({error:"exceeds capacity"});
    }
    const fare=vehicle.rate_per_km*10;
    const {data,error}= await supabase
    .from("trips")
    .insert([{vehicle_id,passengers,fare,status:"ongoing"}]);
    if(error){
        return res.status(500).json({error:error.message});
    }
    return res.status(201).json({message:"trip created",data});
    
})