import { apiFetch } from "../api/fetch"

export const registerUser=async ({payload})=>{
    return await apiFetch({path:'auth/register',data:payload,method:'POST'})
}

export const signinUser=async({payload})=>{
    return await apiFetch({path:'/auth/login',data:payload,method:'POST'})
}