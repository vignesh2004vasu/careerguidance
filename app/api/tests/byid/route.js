import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Test from "@/models/test";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();

    const test = await Test.findById(id);

    if (!test) {
      return NextResponse.json({ message: "Test not found" }, { status: 404 });
    }

    return NextResponse.json({ test }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch test", error: error.message },
      { status: 500 }
    );
  }
}
