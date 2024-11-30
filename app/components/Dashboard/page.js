"use client";

import React, { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //
    console.log(name, price, description);
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("price", price);
    // formData.append("description", description);
    // formData.append("image", image);
    // console.log(formData);

    const hosteldata = {
      name: name,
      price: price,
      description: description,
      image: image
    }
console.log(hosteldata);

    try {
      const response = await fetch(
        "https://backend2024-fpl8.onrender.com/hostels/landlord",
        {
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(hosteldata),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post product");
      }
      setMessage("Product posted successfully!");
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    } catch (err) {
      console.log(new Error(err));
      setMessage("Error posting product");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl text-blue-400 font-bold mb-6">Admin Dashboard</h1>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-4 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Post listings
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
