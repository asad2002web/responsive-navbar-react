import React from "react";
import Features from "../Features/Features";

const PriceCard = ({ plan }) => {
  //   console.log(plan);
  const { type, features, price } = plan;
  return (
    <div>
      <div className="bg-red-400 py-5 px-8 rounded-md">
        <p>{price}
          <span>/month</span>
        </p>
        <h2>Plan: {type}</h2>
        {
            features.map((feature, idx) => <Features 
            key={idx}
            feature={feature}
            ></Features> )
        }
      </div>
    </div>
  );
};

export default PriceCard;
