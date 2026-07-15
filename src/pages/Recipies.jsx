import { useState } from "react";
import Pizza2 from "../assets/pizza2.jpg"
import Noodel from "../assets/noodel.jpg"
import Burger from "../assets/burger.jpg"
import Chola from "../assets/Chola.jpg"

function Recipies() {
    return (
        <>
            <div className="mt-2 flex gap-1.5">
                <div className="p-10 lg:p-5 max-w-sm mx-auto bg-blue-400 rounded-b-t-2xl shadow-lg  items-center text-i space-x-4 ">
                    <div> <img src={Pizza2} alt="pizza2" /></div>
                    <div className=" text-center">Paneer Pizza
                        <div className="rounded-full bg-cyan-300 items-center justify-center text-center" ><button >Get Recipe</button></div>
                    </div>
                </div>

                <div className="p-10 lg:p-5 max-w-sm mx-auto bg-blue-400 rounded-b-t-2xl shadow-lg  items-center text-i space-x-4 ">
                    <div> <img src={Noodel} alt="noodel" /></div>
                    <div className=" ">Paneer Pizza
                        <div ><button className=" rounded-full bg-cyan-300 items-center justify-center text-center">Get Recipe</button></div>
                    </div>
                </div>

                <div className="p-10 lg:p-5 max-w-sm mx-auto bg-blue-400 rounded-b-2xl shadow-lg  items-center text-i space-x-4 ">
                    <div> <img src={Burger} alt="burger" /></div>
                    <div className=" text-center">Paneer Pizza
                        <div ><button>Get Recipe</button></div>
                    </div>
                </div>

                <div className="p-10 lg:p-5 max-w-sm mx-auto bg-blue-400 rounded-b-2xl shadow-lg  items-center text-i space-x-4 ">
                    <div> <img src={Chola} alt="chola" /></div>
                    <div className=" text-center">Paneer Pizza
                        <div ><button>Get Recipe</button></div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Recipies;