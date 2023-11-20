import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

export const POST = async (request: Request) => {
  const note = await request.json();
  const db = new PocketBase(process.env.DB_ENDPOINT);
  await db.collection("Posts").create({
    Title: note.title,
    Content: note.content,
  });
  return NextResponse.json({ message: "Note created.", success: true });
};
