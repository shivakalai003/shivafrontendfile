import { redirect } from "react-router-dom"

export function getuser(){

    const user=localStorage.getItem("userData")

    return user
}
export function userloder(){
    
    return getuser()
    
}

export function checkAuthloder(){

    const user=getuser()
    
    console.log(user);
    if(!user){

        return redirect("/login")

    }
    return user
}