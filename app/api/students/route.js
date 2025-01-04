import connectMongoDB from "@/libs/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, password } = await req.json();
  await connectMongoDB();
  await Student.create({ name, email, password });
  return NextResponse.json(
    { message: "Student created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const students = await Student.find();
  return NextResponse.json({ students }, { status: 200 });
}
