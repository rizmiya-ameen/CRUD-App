import connectMongoDB from "@/libs/mongodb";
import Bookmark from "@/models/bookmark";
import { NextResponse } from "next/server";


//update bookmark
export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Bookmark.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Bookmark updated" }, { status: 200 });
}


//getting a single bookmark by ID
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const bookmark = await Bookmark.findOne({ _id: id });
  return NextResponse.json({ bookmark }, { status: 200 });
}