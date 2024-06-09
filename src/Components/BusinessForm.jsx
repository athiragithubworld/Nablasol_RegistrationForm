import React, { useState, useEffect } from "react";

const BusinessForm = ({
  formData,
  setFormData,
  setIsValid,
  errors,
  setErrors,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the specific error for the field being edited
    setErrors({ ...errors, [name]: "" });
  };

 

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex flex-col">
        <span className="text-center text-base text-slate-400">Step 2</span>
        <span className=" text-2xl font-bold mb-6 text-center">
          Business Information
        </span>
      </div>
      <form className="space-y-4">
        <div className="flex gap-6 justify-between ">
          <div className="w-1/2">
            <label className="block">Brand Name*</label>
            <input
              type="text"
              name="brandName"
              className="w-full border rounded p-1"
              value={formData.brandName}
              onChange={handleChange}
              required
            />
            {errors.brandName && (
              <p className="text-red-500">{errors.brandName}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block">Brand Type*</label>
            <select
              name="brandType"
              className="w-full border rounded p-1"
              value={formData.brandType}
              onChange={handleChange}
              required
            >
              <option value="local">Local</option>
              <option value="national">National</option>
            </select>
          </div>
        </div>
        <div className="flex gap-6 justify-between">
          <div className="w-1/2">
            <label className="block">Street Address*</label>
            <input
              type="text"
              name="streetAddress"
              className="w-full border rounded p-1"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
            {errors.streetAddress && (
              <p className="text-red-500">{errors.streetAddress}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block">City*</label>
            <input
              type="text"
              name="city"
              className="w-full border rounded p-1"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>
        </div>
        <div className="flex gap-6 justify-between">
          <div className="w-1/2">
            <label className="block">Zip Code*</label>
            <input
              type="text"
              name="zipCode"
              className="w-full border rounded p-1"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            {errors.zipCode && <p className="text-red-500">{errors.zipCode}</p>}
          </div>
          <div className="w-1/2">
            <label className="block">Tax ID Number*</label>
            <input
              type="text"
              name="taxId"
              className="w-full border rounded p-1"
              value={formData.taxId}
              onChange={handleChange}
              required
            />
            {errors.taxId && <p className="text-red-500">{errors.taxId}</p>}
          </div>
        </div>
        <div>
          <label className="block">Documents*</label>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full border rounded p-1 bg-white"
              >
                Electronically sign the agreement(s)
              </button>
            </div>
            <div>
              <button
                type="button"
                className="w-full border rounded p-1 bg-white"
              >
                Non-adult beverage Kroger market supplier waiver and release
              </button>
            </div>
          </div>
        </div>
        <div>
          <label className="block">COI PDF Upload*</label>
          <button
            type="button"
            className="w-full border rounded p-1 bg-gray-200"
          >
            Electronically sign the agreement(s)
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;
