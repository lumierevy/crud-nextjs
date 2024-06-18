"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const VendorForm = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const router = useRouter();

  async function handleAddVendor() {
    await fetch("https://v1.appbackend.io/v1/rows/QtnFeQNT1elQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ title, address, contact }]),
    });

    router.refresh();
    setTitle("");
    setAddress("");
    setContact("");
  }

  return (
    <div className="space-y-6 capitalize">
      <textarea
        value={title}
        placeholder="Jakarta Film Festival"
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <textarea
        value={address}
        placeholder="123 Thamrin Street, Movie Block M, 45678"
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>
      <textarea
        value={contact}
        placeholder="Dhanu B, +628123456789, dhanu.jktfest@gmail.com"
        onChange={(e) => setContact(e.target.value)}
      ></textarea>
      <button
        className="bg-indigo-500 px-3 py-2 rounded-xl h-10 "
        onClick={handleAddVendor}
      >
        + Add Vendor
      </button>
    </div>
  );
};
