"use client";

import { Home2 } from "solar-icon-set/essentionalui";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const VendorCard = ({ item }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  async function handleDeleteVendor() {
    await fetch("https://v1.appbackend.io/v1/rows/QtnFeQNT1elQ", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    router.refresh();
  }

  async function handleEditVendor(e) {
    e.preventDefault();
    await fetch("https://v1.appbackend.io/v1/rows/QtnFeQNT1elQ", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: item._id,
        ...editedItem,
      }),
    });

    setIsEditing(false);
    router.refresh();
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="h-full">
      <div className="bg-indigo-600 p-4 rounded-lg shadow-md space-y-3 flex flex-col h-full">
        <div className="text-xl font-bold text-white mb-2 truncate tracking-tight space-x-3">
          <span>
            <Home2 />
          </span>{" "}
          {item.title}
        </div>
        <div className="text-white mb-2 truncate">{item.address}</div>
        <div className="text-white truncate">
          <div className="">{item.contact}</div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500  via-blue-600-600 to-emerald-500 text-white border border-indigo-600 font-extrabold  px-3 py-1 mt-3 rounded-lg w-fit">
          {item.type}
        </div>
        <div className="flex justify-end space-x-3 mt-4">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-transparent border px-3 py-1 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteVendor}
            className="bg-white rounded-lg border text-indigo-600 px-3 py-1"
          >
            Delete
          </button>
        </div>
      </div>

      {isEditing && (
        <div
          onClick={() => setIsEditing(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 p-6 rounded-lg lg:w-[530px]"
          >
            <h2 className="text-xl font-bold mb-4 text-indigo-600">
              Edit Vendor
            </h2>
            <form onSubmit={handleEditVendor}>
              <input
                type="text"
                name="title"
                value={editedItem.title}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded text-white"
                placeholder="Title"
              />
              <input
                type="text"
                name="address"
                value={editedItem.address}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded text-white"
                placeholder="Address"
              />
              <input
                type="text"
                name="contact"
                value={editedItem.contact}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded text-white"
                placeholder="Contact"
              />
              <select
                name="type"
                value={editedItem.type}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded text-white"
              >
                <option value="Screening Venue">Screening Venue</option>
                <option value="Catering Services">Catering Services</option>
                <option value="Event Organizer">Event Organizer</option>
                <option value="Production House">Production House</option>
              </select>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
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
    </div>
  );
};
