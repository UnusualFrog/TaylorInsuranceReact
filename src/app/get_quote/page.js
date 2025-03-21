'use client'
import { useState } from "react";

export default function GetQuote() {

  const [insuranceType, setInsuranceType] = useState("home");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="flex justify-center items-start pt-16 sm:pt-20 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center w-[400px]">
        <div className="w-full bg-white shadow-md rounded-md p-6">
          {/* Select Box for toggling between Insurance types */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Select Insurance Type:</label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={insuranceType}
              onChange={(e) => setInsuranceType(e.target.value)}
            >
              <option value="home">Home Insurance</option>
              <option value="auto">Auto Insurance</option>
            </select>
          </div>

          {/* Form content */}
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {insuranceType === "home" ? (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Build Date</label>
                  <input 
                    type="date"
                    name="buildDate"
                    placeholder="Build Date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Heating (Electric / Oil)</label>
                  <input
                    type="text"
                    name="heating"
                    placeholder="Heating (Electric / Oil)"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Urban Area:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="urban"
                        value="yes"
                        onChange={handleChange}
                        required
                      /> Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="urban"
                        value="no"
                        onChange={handleChange}
                        required
                      /> No
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Property Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Car Make</label>
                  <input
                    type="text"
                    name="carMake"
                    placeholder="Make"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Car Model</label>
                  <input
                    type="text"
                    name="carModel"
                    placeholder="Model"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Year of Manufacture</label>
                  <input
                    type="number"
                    name="carYear"
                    placeholder="Year"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Car Colour</label>
                  <input
                    type="text"
                    name="carColour"
                    placeholder="Colour"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-[200px] h-[50px] text-lg font-medium text-white bg-gray-900 rounded-md shadow-lg flex items-center justify-center hover:bg-gray-700 transition"
              >
                Get Quote
              </button>
            </div>
          </form>
          <p className="text-center text-gray-800 text-xs">&copy;2025 Insurance Corp. All rights reserved.</p>
        </div>

      </main>
    </div>
  );
}
