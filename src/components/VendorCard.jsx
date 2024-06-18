"use client";

export const VendorCard = ({ item }) => {
  return (
    <div key={item._id} className="">
      <div className=" bg-indigo-600 p-4 rounded-lg shadow-md">
        <div className=" text-xl font-bold text-white mb-2 truncate tracking-tight">
          {item.title}
        </div>
        <div className=" text-white mb-2 truncate">{item.address}</div>
        <div className=" text-white truncate">{item.contact}</div>
      </div>
    </div>
  );
};
