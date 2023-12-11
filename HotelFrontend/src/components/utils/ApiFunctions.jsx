import axios from "axios";
import React from "react";

export const api=axios.create({
    baseURL:"http://localhost:9192/api/v1/"
})


export async function addRoom(photo,roomType,roomPrice){
    const formData =new FormData();
    formData.append("photo",photo)
    formData.append("roomType",roomType)
    formData.append("roomPrice",roomPrice)

   const reponse=await api.post("rooms/add/new-room",formData)
   if(reponse.status==201){
    return true
   }
   else{
    return false
   }
}


export async function getRoomTypes()
{
   try{
    const response=await api.get("rooms/getRoomTypes")
    return response.data
   }
   catch(error){
throw new error("error in fetching room types")
   }
}