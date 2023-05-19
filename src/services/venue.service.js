import { apiFetch } from "../api/fetch"

export const getVenueList=async()=>{
    return await apiFetch({path:'venues',method:'GET'})
}