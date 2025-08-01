// import { NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();
//     const { name, email, message } = data;

//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "Сите полиња се задолжителни." }, { status: 400 });
//     }

//     const client = await clientPromise;
//     const db = client.db("bushidosan");
//     const collection = db.collection("messages");

//     await collection.insertOne({ name, email, message, createdAt: new Date() });

//     return NextResponse.json({ message: "Пораката е испратена успешно." }, { status: 200 });
//   } catch (error) {
//     console.error("Грешка:", error);
//     return NextResponse.json({ error: "Серверска грешка." }, { status: 500 });
//   }
// }
