import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, message } = data;

    // Log the enquiry (Mock database / email trigger)
    console.log("------------------- NEW ENQUIRY -------------------");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("--------------------------------------------------");

    // Return success response
    return NextResponse.json({ success: true, message: "Enquiry received successfully!" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
