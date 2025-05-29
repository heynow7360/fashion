import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Authorization": `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: "d89b2de9e6a588b0d6eabbe9c623b268db1a4aa766ae7f36fa1b6a6c5e4afc94",
      input: {
        image: body.image // base64 이미지 주소
      }
    })
  });

  const data = await response.json();
  return NextResponse.json(data);
}
