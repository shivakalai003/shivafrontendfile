import React, { useEffect, useState,createContext } from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet ,useNavigate} from "react-router-dom";


export const Appcontext=createContext(null)

function RootLayout() {

    const navigate=useNavigate()

    const [search,setsearch]=useState("")

    const [user, setUser] = useState(null);

    useEffect(()=>{

        if(search){
            navigate("/Movie/Search")
        // }else{

        //     navigate("/Home")
        // }
        }

   },[search]);

   useEffect(()=>{
    if(user){

        localStorage.setItem("userData",JSON.stringify(user))
    }
   },[user]);


    return(
        <Appcontext.Provider value={{search,setsearch,user,setUser}}>
    <div>

    <Navbar />

    <div className="container">
    
    <Outlet/>
    
    </div>

   </div>

 </Appcontext.Provider>

    );
    
}
export default RootLayout;