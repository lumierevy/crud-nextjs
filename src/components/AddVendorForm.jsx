"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const AddVendorForm = () => {
  const router = useRouter();
  const [isAddVendor, setIsAddVendor] = useState(false);
  const [addItem, setAddItem] = useState("");

  async function handleAddVendor(e) {
    e.preventDefault();
    await fetch("https://v1.appbackend.io/v1/rows/QtnFeQNT1elQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ ...addItem }]),
    });

    setIsAddVendor(false);
    router.refresh();
  }

  function handleInputAddVendorChange(e) {
    const { name, value } = e.target;
    setAddItem((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <button
        onClick={() => setIsAddVendor(true)}
        className="bg-indigo-500 px-3 py-2 rounded-xl h-10 "
      >
        + Add Vendor
      </button>
      {isAddVendor && (
        <div
          onClick={() => setIsAddVendor(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 p-6 rounded-lg w-[530px]"
          >
            <h2 className="text-xl font-bold mb-4 text-indigo-600">
              Add Vendor
            </h2>
            <form onSubmit={handleAddVendor}>
              <input
                onChange={handleInputAddVendorChange}
                type="text"
                name="title"
                placeholder="Jakarta Film Festival"
                className="w-full p-2 mb-2 border rounded-lg text-white"
              />
              <input
                onChange={handleInputAddVendorChange}
                type="text"
                name="address"
                placeholder="123 Film Street, Movie Town, 45678"
                className="w-full p-2 mb-2 border rounded-lg text-white"
              />
              <input
                onChange={handleInputAddVendorChange}
                type="text"
                name="contact"
                placeholder="Anna Brown, +556778899, anna.brown@reeldeal.com"
                className="w-full p-2 mb-2 border rounded-lg text-white"
              />
              <select
                name="type"
                onChange={handleInputAddVendorChange}
                className="w-full p-2 mb-2 border rounded-lg text-white"
              >
                <option value="" disabled selected>
                  Select Vendor Type
                </option>
                <option value="Screening Venue">Screening Venue</option>
                <option value="Catering Services">Catering Services</option>
                <option value="Event Organizer">Event Organizer</option>
                <option value="Production House">Production House</option>
              </select>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddVendor(false)}
                  className="px-4 py-2 bg-gray-300 rounded text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <form action=""></form>
    </div>
  );
};
