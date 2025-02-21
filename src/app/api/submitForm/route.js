import { MongoClient } from "mongodb";

const uri = "mongodb+srv://karthikvaranasi07:l39eu8xTl4lK9stI@cluster0.vbw2n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let client;

export async function POST(req) {
  try {
    // Connect to MongoDB only if it's not already connected
    if (!client) {
      client = new MongoClient(uri);
    }

    // Parse the request body
    const userData = await req.json();

    // Log the user data for debugging
    console.log("Received user data:", userData); // Log the data being received

    // If userData is empty or null, return an error (optional)
    if (!userData || Object.keys(userData).length === 0) {
      console.log("No data provided");
      return new Response(
        JSON.stringify({ message: "No data provided" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Connect to the database
    await client.connect();
    const db = client.db("Dataentery");
    const usersCollection = db.collection("Data");

    // Insert user data into MongoDB
    const result = await usersCollection.insertOne(userData);

    // Respond with the result
    console.log("Inserted data:", result); // Log the inserted result
    return new Response(
      JSON.stringify({ message: "User added successfully", insertedId: result.insertedId }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      { status: 500 }
    );
  } finally {
    // Ensure the connection is closed properly
    await client.close();
  }
}
