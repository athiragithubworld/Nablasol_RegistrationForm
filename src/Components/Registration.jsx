import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import BusinessForm from "./BusinessForm";
import StepIndicator from "./Pagination/StepIndicator";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxId: "",
    brandType: "local",
  });
  const [isProfileValid, setIsProfileValid] = useState(false);
  const [isBusinessValid, setIsBusinessValid] = useState(false);
  const [profileErrors, setProfileErrors] = useState({});
  const [businessErrors, setBusinessErrors] = useState({});

 const nextStep = () => {
   // If the current step is 1
   if (step === 1) {
     // Validate the profile form
     validateProfile();
     // If the profile form is valid, proceed to the next step
     if (isProfileValid) setStep(step + 1);
   }
   // If the current step is 2
   else if (step === 2) {
     // Validate the business form
     validateBusiness();
     // If the business form is valid, proceed to the next step
     console.log("valid",isBusinessValid)
     if (isBusinessValid) setStep(step + 1);
   }
 };


  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (isProfileValid && isBusinessValid) {
      // Retrieve existing data from local storage
      console.log("valid")
      const existingData =
        JSON.parse(localStorage.getItem("registrationData")) || [];

      // Add the new form data to the existing data
      const updatedData = [...existingData, formData];

      // Save the updated data array back to local storage
      localStorage.setItem("registrationData", JSON.stringify(updatedData));
      alert("Registration data saved successfully!");
      setStep(1);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        brandName: "",
        streetAddress: "",
        city: "",
        zipCode: "",
        taxId: "",
        brandType: "local",
      });
    }
  };

  const validateProfile = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidPhone = /^\d{10,}$/.test(formData.phone) && formData.phone.length===10 ; // Ensures the phone number is only digits and at least 10 digits long
    const isValidPassword = formData.password.length > 7; // Ensures the password length is more than 7 characters

    setIsProfileValid(
      !!formData.firstName &&
        !!formData.lastName &&
        isValidEmail &&
        isValidPhone &&
        isValidPassword &&
        formData.password === formData.confirmPassword // Ensures password matches confirmPassword
    );

    setProfileErrors({
      firstName: !formData.firstName ? "First name is required" : "",
      lastName: !formData.lastName ? "Last name is required" : "",
      email: !isValidEmail ? "Valid email is required" : "",
      phone: !isValidPhone ? "Valid phone number is required" : "",
      password: !isValidPassword ? "Valid password need to have minimum 8 letters" : "",
      confirmPassword:
        formData.password !== formData.confirmPassword
          ? "Passwords do not match"
          : "",
    });
  };

  const validateBusiness = () => {
    const isValidZipcode = /^\d{6}$/.test(formData.zipCode) && formData.zipCode.length === 6;
 // Ensures the phone number is only digits and at least 10 digits long
    setIsBusinessValid(
      !!formData.brandName &&
        !!formData.streetAddress &&
        !!formData.city &&
        isValidZipcode &&
        !!formData.taxId
    );

    setBusinessErrors({
      brandName: !formData.brandName ? "Brand name is required" : "",
      streetAddress: !formData.streetAddress
        ? "Street address is required"
        : "",
      city: !formData.city ? "City is required" : "",
      zipCode: !isValidZipcode ? "Valid Zip code need minimum 6 digit required" : "",
      taxId: !formData.taxId ? "Tax ID number is required" : "",
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center w-full">
      <h1 className="text-white font-[90px] text-[30px] text-center h-[50px]">
        Create New Account
      </h1>

      <div className="w-full max-w-2xl min-w-fit mx-auto  bg-white rounded-lg shadow-lg">
        <StepIndicator step={step} />
        {step === 1 && (
          <>
            <ProfileForm
              formData={formData}
              setFormData={setFormData}
              setIsValid={setIsProfileValid}
              errors={profileErrors}
              setErrors={setProfileErrors}
            />
            <div className="flex justify-between mt-6 p-8">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
                disabled
              >
                Previous Step
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Next Step
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <BusinessForm
              formData={formData}
              setFormData={setFormData}
              setIsValid={setIsBusinessValid}
              errors={businessErrors}
              setErrors={setBusinessErrors}
            />
            <div className="flex justify-between mt-6 p-8">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
              >
                Previous Step
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Next Step
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            {/* <h2 className="text-2xl font-bold mb-6">Step 3: Review & Submit</h2> */}
            <div className="flex justify-between mt-6 p-8">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
              >
                Previous Step
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Registration;
