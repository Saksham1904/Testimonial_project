import React, { useState } from "react";
import Card from "./Card";
const Testimonials=(props)=>{
    let reviews=props.reviews;
    const[index,setindex]=useState(0);
    function lefthandler(){
        if(index-1<0)
        {
            setindex(reviews.length-1)
        }
        else{
            setindex(index-1)
        }



    }
    function righthandler(){
        if(index+1>=reviews.length){
            setindex(0)
        }
        else{
            setindex(index+1)
        }

    }
    function surprisehandler(){
       let randomindex=Math.floor( Math.random()*reviews.length)
       setindex(randomindex);

    }
    return(
        <div>
            <Card review={reviews[index]}/>
            <div className="flex text-3xl mt-5 gap-4 text-violet-400 font-bold mx-auto">
            <button className="cursor-pointer hover:text-violet-600 " onClick={lefthandler}> 
                -
            </button>
            <button onClick={righthandler} className="cursor-pointer hover:text-violet-600 ">
                +
            </button>
        </div>
        <div className="">
            <button onClick={surprisehandler} className="bg-violet-500 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-large">
                SURPRISE ME
            </button>
        </div>
        </div>
    )

}
export default Testimonials;
