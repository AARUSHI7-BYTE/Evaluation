import {supabase} from "../config/supabase.js";
export const addvehicle=async(req,res)=>{
    const {owner_id,model,rate_per_km}=req.body;
    const {data,error}= await supabase
    .from("vehicles")
    .insert([{owner_id,model,rate_per_km}]);
    if(error){
        return res.status(500).json({error:error.message});
    }
    return res.status(201).json({message:"vehicle added",data});
};
export const assigndriver= async(req,res)=>{
    const {vehicleid}=req.params;
    const {driver_id}=req.body;
    const {data,error}=await supabase
    .from("vehicles")
    .update({driver_id})
    .eq("id",vehicleid);
    if(error){
        return res.status(500).json({error:error.message});
    }
    return res.status(200).json({message:"driver assigned",data});
};

export const getvehicle = async((req,res)=>{
    const {vehicleid} =req.parans;
    const {data}= await supabase
})