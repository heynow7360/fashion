"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageData = reader.result as string;
        sessionStorage.setItem("uploadedImage", imageData);
        router.push("/result");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-6xl font-bold tracking-wide mb-8 font-sans">fashionder</h1>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        onClick={() => fileInputRef.current?.click()}
        className="px-6 py-3 bg-black text-white text-lg rounded-xl hover:bg-gray-800 transition"
      >
        Find Start
      </button>
    </main>
  );
}
