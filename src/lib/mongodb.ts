import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI!;
if (!uri) throw new Error("Please add your Mongo URI to .env.local");

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  console.log("✅ New MongoClient connection created");
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise!;
export default clientPromise;
