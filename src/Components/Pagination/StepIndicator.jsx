import React from "react";

const StepIndicator = ({ step }) => {
  const steps = [
    { id: 1, label: "Your Profile" },
    { id: 2, label: "Business Information" },
    { id: 3, label: "Additional Users" },
  ];

  const getStepClass = (stepId) => {
    if (stepId < step) {
      return "bg-blue-600 text-white ";
    } else if (stepId === step ) {
      return `bg-blue-600 text-white ${step!==3?"rounded-r-full":""}`;
    }
    
    
    else {
      return "bg-gray-300 text-gray-500";
    }
  };

  return (
    <div className="flex justify-center mt-4 mb-6 bg-gray-300 text-gray-500 ">
      {steps.map((stepObj) => (
        <div
          key={stepObj.id}
          className={`flex items-center px-4 py-2 w-1/3 ${getStepClass(
            stepObj.id
          )}`}
        >
          <span className="mr-2">{stepObj.id}</span>
          <span>{stepObj.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;

