import { useState } from "react";
import Pizza2 from "../assets/pizza2.jpg"

function Recipies (){
    return(
        <>
       <div className="">
        <div className="p-10 lg:p-5 max-w-sm mx-auto bg-blue-400 rounded-b-2xl shadow-lg  items-center text-i space-x-4 ">
            <div> <img src={Pizza2} alt="pizza2" /></div>
            <div className=" text-center">Paneer Pizza 
                 <div ><button>Get Recipe</button></div>
            </div>
        </div>
       </div>
        </>
    )
}
export default Recipies;