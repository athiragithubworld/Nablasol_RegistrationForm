import React, { useState, useEffect } from "react";

const ProfileForm = ({ formData, setFormData, setIsValid, errors ,setErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the specific error for the field being edited
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex flex-col">
        <span className="text-center text-base text-slate-400">Step 1</span>
        <span className="text-2xl font-bold mb-6 text-center">
          Your Profile
        </span>
      </div>
      <form className="space-y-4">
        <div className="flex gap-6">
          <div>
            <label className="block">First Name*</label>
            <input
              type="text"
              name="firstName"
              className="w-full border rounded p-2"
              value={formData.firstName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block">Last Name*</label>
            <input
              type="text"
              name="lastName"
              className="w-full border rounded p-2"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex gap-6">
          <div>
            <label className="block">Email*</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block">Phone Number*</label>
            <input
              type="text"
              name="phone"
              className="w-full border rounded p-2"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
        </div>
        <div className="flex gap-6">
          <div>
            <label className="block">Password*</label>
            <input
              type="password"
              name="password"
              className="w-full border rounded p-2"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block">Confirm Password*</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full border rounded p-2"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
