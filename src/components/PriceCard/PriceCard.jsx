import React from "react";
import Features from "../Features/Features";

const PriceCard = ({ plan }) => {
  //   console.log(plan);
  const { type, features, price } = plan;
  return (
    <div>
      <div className="bg-red-400 py-5 px-8 rounded-md">
        <p className="text-center text-5xl font-bold">{price}
          <span className="text-purple-800 text-2xl">/month</span>
        </p>
        <h2 className="text-center text-3xl font-bold py-4">Plan: {type}</h2>
        {
            features.map((feature, idx) => <Features 
            key={idx}
            feature={feature}
            ></Features> )
        } 
        <button className="text-center bg-slate-600 w-full py-3 mt-10 text-2xl font-bold text-white  "> Purchase Now</button>
      </div>
    </div>
  );
};

export default PriceCard;
