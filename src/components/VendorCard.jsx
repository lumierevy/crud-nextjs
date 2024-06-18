"use client";

import { useRouter } from "next/navigation";

export const VendorCard = ({ item }) => {
  const router = useRouter();

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

  return (
    <div key={item._id} className="">
      <div className=" bg-indigo-600 p-4 rounded-lg shadow-md">
        <div className=" text-xl font-bold text-white mb-2 truncate tracking-tight">
          {item.title}
        </div>
        <div className=" text-white mb-2 truncate">{item.address}</div>
        <div className=" text-white truncate">{item.contact}</div>
        <div className="flex justify-end">
          <button
            onClick={handleDeleteVendor}
            className="bg-white rounded-lg border text-indigo-600 px-3 py-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
