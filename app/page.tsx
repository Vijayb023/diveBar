"use client";

import { useState } from "react";

export default function Page() {
  const [inventory, setInventory] = useState<{ name: string; quantity: number; category: string }[]>([]);
  const [form, setForm] = useState({ name: "", quantity: "", category: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.quantity || !form.category) return alert("All fields are required");

    setInventory([...inventory, { name: form.name, quantity: parseInt(form.quantity), category: form.category }]);
    setForm({ name: "", quantity: "", category: "" });
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Add Bar Inventory</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 border rounded-md"
            placeholder="Item Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded-md"
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded-md"
            placeholder="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded-md">Add Item</button>
        </form>
      </div>

      {inventory.length > 0 && (
        <div className="w-full max-w-md mt-6 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-4">Inventory List</h2>
          <ul className="space-y-2">
            {inventory.map((item, index) => (
              <li key={index} className="flex justify-between p-2 border rounded-lg">
                <span>{item.name} ({item.category})</span>
                <span className="font-bold">{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
