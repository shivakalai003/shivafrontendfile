import React, { useEffect, useReducer, useState } from "react";




// const reducer=(state,action)=>{
//     switch (action.type) {
//         case "Increse-count":
//             return{count:state.count + 1,showtext:state.showtext};
//             case "Toggle-show-text":
//                 return{count:state.count ,showtext:!state.showtext};
//                 case "Increse-count-Toggle-show-text":
//                     return{count:state.count + 1,showtext:!state.showtext};

//         default:
            
//         return state;
//     }
// };

function Landpage() {

     // const[count,setcount]=useState(0);

    // const[showtext,setshowtext]=useState(false);

    // const [inputvalue,setinputvalue]=useState("");

    // const [state,dispatch]=useReducer(reducer,{count:0,showtext:false});


    // function IncreaseCount() {
    
        // setcount(count +  1);
        // setshowtext(!showtext);
            // console.log(count);
            // dispatch({type:"Increse-count"});
            // dispatch({type:"Toggle-show-text"});
    //         dispatch({type:"Increse-count-Toggle-show-text"});
            
            
    // };


    // function getinputvalue(event) {
    //     setinputvalue(event.target.value);
        
    // };

    
    // function callback() {

    //     console.log("Called by useeffect");
        
    // }

    // useEffect(callback,[count])

    // {
    

    // let count=0;

    // function IncreaseCount() {
    //     // count++;

    //     // console.log(count);

    //  }
    // }
    //  console.log("This is componet was rendered");

    

    return(
      
        <div >
        <p class="text-end">


         <img src="https://images.unsplash.com/photo-1692647452435-46e87dd58a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="rounded" width={1200} height={550} 
          alt="..."/>
       </p>


          {/* <p>{state.count}</p>
            <button className="btn btn-warning" onClick={IncreaseCount}>
           Increase Count 
             </button> 
           {state.showtext &&   <p>This is use reducer</p>}
             <p>
             <input className="from-control" onChange={getinputvalue}/>             
             <p>{inputvalue}</p>
             </p> */}

        </div>
       
    );
    };
    
    

          

            
    


export default Landpage;