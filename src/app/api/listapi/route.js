import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const dynamic = "force-dynamic"; // Ensures this API runs only on the server

const uri = "mongodb+srv://karthikvaranasi07:l39eu8xTl4lK9stI@cluster0.vbw2n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function GET() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db("Dataentery");
    const usersCollection = db.collection("Data");
    const users = await usersCollection.find({}).toArray(); 
      
    return NextResponse.json({ 
      message: users.length > 0 ? "Login successful" : "No users found",
      users 
    }, { status: users.length > 0 ? 200 : 401 });

  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });

  } finally {
    await client.close();
  }
}
