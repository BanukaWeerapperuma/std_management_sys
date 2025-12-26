import React , {useState} from "react";

function CounterFun() {

     // Function component logic goes here
            // we cant define constroctor for give status
            // as we use react hooks.
            // Example: useState, useEffect, etc.

            //if val change use let,var (X const)

            //dedine this.state.
            //variable name of that i want store ,  used method
            //stateful val , a fun. to update  
            //we want to default "0" to useState

         let [number , setNumber] = useState(0)
    return(
        <div>
           
            

            

        </div>
    )
}


const btn =document.getElementById("btn");

