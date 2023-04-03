import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Features = ({ feature }) => {
  return (
    <div className="flex items-center">
      <CheckBadgeIcon className="h-4 w-4 text-white" />
      <span className="ml-2">{feature}</span>
    </div>
  );
};

export default Features;
