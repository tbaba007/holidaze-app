import { baseUrl } from "../config/base";

const token=document.cookie

export const apiFetch=async({path,method,data})=>{
    try{
        const response=await fetch(`${baseUrl}/${path}`,{
            method:method,
            headers:{
                Authorization: `Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const responseData=await response.json();
        return responseData;
    }
    catch(ex){
        if(ex instanceof Error){
            return ex.message
        }
    }
   
}