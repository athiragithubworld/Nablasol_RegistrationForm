import React, { useState, useEffect } from "react";
import { MdCheck } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const BusinessForm = ({
  formData,
  setFormData,
  setIsValid,
  errors,
  setErrors,
}) => {
  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update formData state with new input value
    setFormData({ ...formData, [name]: value });

    // Clear the specific error for the field being edited
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="w-full max-w-[90%] my-auto mx-7">
      <div className="flex flex-col">
        {/* Step Indicator */}
        <span className="text-center text-base text-slate-400">Step 2</span>
        <span className=" text-2xl font-bold mb-3 text-center">
          Business Information
        </span>
      </div>
      {/* Form */}
      <form className="space-y-1 space-x-4">
        <div className="flex flex-col gap-1 ml-5 justify-between ">
          <label className="text-blue-500">General Document</label>
          <div className="flex gap-6 justify-between">
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
              {/* Display error message for Brand Name if exists */}
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
        </div>
        {/* Street Address and City fields */}
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
            {/* Display error message for Street Address if exists */}
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
            {/* Display error message for City if exists */}
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>
        </div>
        {/* Zip Code and Tax ID Number fields */}
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
            {/* Display error message for Zip Code if exists */}
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
          {/* Documents Section */}
          <label className="block text-blue-400">Documents*</label>
          <div className="space-y-2">
            <div className="flex gap-3">
              <label
                type="button"
                className="w-full flex justify-between items-center border rounded p-1 bg-white"
              >
                <span>Electronically sign the agreement(s)</span>
                <span className="text-green-600 font-bold">
                  <MdCheck />
                </span>
              </label>
              <button className="text-white bg-blue-500 py-1 px-2 rounded">
                <FaChevronRight />
              </button>
            </div>
            <div className="flex gap-3">
              <label
                type="button"
                className="w-full border flex justify-between items-center rounded p-1 bg-white"
              >
                <span>
                  Non-adult beverage Kroger market supplier waiver and release
                </span>
                <span className="text-red-600 font-bold">
                  <IoClose />
                </span>
              </label>
              <button className="text-white bg-blue-500 py-1 px-2 rounded">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-blue-400">COI PDF Upload*</label>
          <div className="flex gap-3">
            <label
              type="button"
              className="w-full flex justify-between items-center border rounded p-1 bg-white"
            >
              <span> Electronically sign the agreement(s)</span>
              <span className="text-green-600 font-bold">
                <MdCheck />
              </span>
            </label>
            <button className="text-white bg-blue-500 py-1 px-2 rounded">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;
