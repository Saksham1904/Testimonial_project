import React from "react";
import {FaQuoteLeft,FaQuoteRight,FaGem} from 'react-icons/fa';
const Card=(props)=>{
    let review=props.review;
return(
    <div className="flex flex-col md:relative  ">
        <div className="">
            <div className="aspect-square rounded-full w-[140px] h-[140px] z-[10] bg-violet-500 " />
            <img className="w-[140px] h-[140px]  rounded-full absolute top-[-6px] z-[110] left-[10px]" src={review.image}/>
        </div>
        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalise">{review.name}</p>
        </div>
        <div className="text-center mt-7">
            <p className="capitalise text-violet-300 text-sm">{review.job}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-5 ">
            <FaQuoteLeft/>
        </div>
        <div className="text-center mt-4 text-slate-500">
            {review.text}
        </div>
        <div className="text-violet-400 mx-auto mt-5 ">
            <FaQuoteRight/>
        </div>
      
    </div>
)
}
export default Card;