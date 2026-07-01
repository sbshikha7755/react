import { useState } from 'react';
import Pizza from "../assets/pizza.jpg";


function Home () {
    return (
        <>
        <div className='main-box'>
            <div className='box1'>
                <h1>Spicy Delicious Pizza</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis consectetur nisi corporis ipsam harum architecto repellendus aliquid dolores eos.</p>
                <button>Click ME</button>

            </div>
            <div className='box2'>
                <img src={Pizza} alt="pizza" />
                <h1>image</h1>
            </div>
        </div>
        

        </>
    )
     
}
export default Home;