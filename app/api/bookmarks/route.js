import connectMongoDB from "@/libs/mongodb";
import Bookmark from "@/models/bookmark";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Bookmark.create({ title, description });
  return NextResponse.json({ message: "Bookmark Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const bookmarks = await Bookmark.find();
  return NextResponse.json({ bookmarks });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Bookmark.findByIdAndDelete(id);
  return NextResponse.json({ message: "Bookmark deleted" }, { status: 200 });
}