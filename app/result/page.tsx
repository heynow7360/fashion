"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedImage = sessionStorage.getItem("uploadedImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white relative">
      {/* Back 버튼 */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        Back
      </button>

      {/* 타이틀 */}
      <h1 className="text-2xl font-semibold mb-6">분석 중인 이미지</h1>

      {/* 이미지 표시 */}
      {image ? (
        <img
          src={image}
          alt="업로드된 이미지"
          className="w-80 rounded shadow"
        />
      ) : (
        <p>이미지가 없습니다.</p>
      )}
    </main>
  );
}
