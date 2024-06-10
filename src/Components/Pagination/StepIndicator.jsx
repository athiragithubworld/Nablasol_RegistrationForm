import React from "react";

const StepIndicator = ({ step }) => {
  // Define the steps in an array of objects, each containing an id and label.
  const steps = [
    { id: 1, label: "Your Profile" },
    { id: 2, label: "Business Information" },
    { id: 3, label: "Additional Users" },
  ];

  // Function to determine the CSS classes for each step based on the current step.
  const getStepClass = (stepId) => {
    // If the stepId is less than the current step, it means the step is completed.
    if (stepId < step) {
      // If the stepId is equal to the current step, it means the step is active.
      return "bg-blue-600 text-white ";
    } else if (stepId === step) {
      // Add rounded-r-full class to the active step if it's not the last step.
      return `bg-blue-600 text-white ${step !== 3 ? "rounded-r-full" : ""}`;
      // If the stepId is greater than the current step, it means the step is yet to be completed.
    } else {
      return "bg-gray-300 text-gray-500";
    }
  };

  return (
    <div className="flex justify-center mt-4 mb-2 bg-gray-300 text-gray-500 ">
      {steps.map((stepObj) => (
        // For each step, render a div with appropriate CSS classes and content.
        <div
          key={stepObj.id}
          className={`flex items-center px-4 py-2 w-1/3 ${getStepClass(
            stepObj.id
          )}`}
        >
          {/* Display the step number */}
          <span className="mr-2">{stepObj.id}</span>
          <span>{stepObj.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;

