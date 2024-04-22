'use client'

import { useState } from "react";


const ClientPage = () => {

    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter + 1);
    }

    const decrementCount = () => {
        if (counter > 0)
        setCounter(counter - 1)
    }



    return(
        <div className="text-3xl">
            <h3 className="text-black">Counter: {counter}</h3>
            <div className="my-5 mx-auto flex gap-5">
                <button className="bg-white border-slate-600 border px-5 outline-none hover:bg-slate-200 text-black" onClick={incrementCount}>+</button>
                <button className="bg-white border-slate-600 border px-5 outline-none hover:bg-slate-200 text-black" onClick={decrementCount}>-</button>
            </div>
            
        </div>
    )
};

export default ClientPage;