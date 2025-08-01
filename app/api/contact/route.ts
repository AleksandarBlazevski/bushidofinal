import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received data:", data);

    const { ime, email, poruka } = data;

    if (!ime || !email || !poruka) {
      return NextResponse.json(
        { error: "Сите полиња се задолжителни." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bushidosan");

    const result = await db.collection("contacts").insertOne({
      ime,
      email,
      poruka,
      createdAt: new Date(),
    });
    console.log("Mongo insert result:", result);

    return NextResponse.json(
      { message: "Пораката е испратена успешно." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Серверска грешка." },
      { status: 500 }
    );
  }
}
