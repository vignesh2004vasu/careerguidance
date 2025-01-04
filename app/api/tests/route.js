import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Test from "@/models/test";

export async function POST(req) {
  try {
    const {
      name,
      difficultyLevel,
      numberOfQuestions,
      duration,
      questions,
      category,
    } = await req.json();

    await connectMongoDB();

    const test = await Test.create({
      name,
      difficultyLevel,
      numberOfQuestions,
      duration,
      questions,
      category,
    });

    return NextResponse.json(
      { message: "Test created successfully", test },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create test", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const tests = await Test.find({}).select('-questions.correctOption');
    
    return NextResponse.json(
      { tests },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch tests", error: error.message },
      { status: 500 }
    );
  }
}