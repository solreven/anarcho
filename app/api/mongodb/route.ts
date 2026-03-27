import { connectToDatabase } from "@/app/lib/mongoDBconnect";
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const db = await connectToDatabase();
  if (!db) {
    return Response.json({ error: "Failed to connect to the database" });
  }
  const items = await db.collection("testing-items").find({}).toArray();
  return Response.json(items);
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    const data = await request.json();
    const db = await connectToDatabase();
    if (!db) {
      return Response.json({ error: "Failed to connect to the database" });
    }
    const result = await db
      .collection("testing-items")
      .insertOne({ ...data, ownerId: userId });
    return Response.json({ insertedId: result.insertedId });
  } catch (error) {
    console.error("POST /api/mongodb error:", error);
    return Response.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
