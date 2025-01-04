import connectMongoDB from "@/libs/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();
  await connectMongoDB();
  const student = await Student.findOne({ email });

  if (student && student.password === password) {
    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }
}
