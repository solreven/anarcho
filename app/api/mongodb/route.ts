// import { connectToDatabase } from "@/app/lib/mongoDBconnect";
// import { NextRequest } from "next/server";
// import { auth } from "@clerk/nextjs/server";

// export async function GET() {
//   const db = await connectToDatabase();
//   if (!db) {
//     return Response.json({ error: "Failed to connect to the database" });
//   }
//   const items = await db.collection("testing-items").find({}).toArray();
//   return Response.json(items);
// }

// export async function POST(request: NextRequest) {
//   const { userId } = await auth();
//   const data = await request.json();
//   const db = await connectToDatabase();
//   const result = await db
//     .collection("testing-items")
//     .insertOne({ ...data, ownerId: userId });
//   return Response.json({ insertedId: result.insertedId });
// }
