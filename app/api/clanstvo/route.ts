import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

interface ClanstvoData {
  ime: string;
  prezime: string;
  godina: number;
  email: string;
  telefon: string;
  poruka?: string;
}

export async function POST(request: Request) {
  try {
    const data: ClanstvoData = await request.json();

    // Trim и проверки
    if (
      !data.ime?.trim() ||
      !data.prezime?.trim() ||
      !data.godina ||
      !data.email?.trim() ||
      !data.telefon?.trim()
    ) {
      return NextResponse.json(
        { error: "Сите задолжителни полиња мора да бидат пополнети." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bushidosan");

    await db.collection("clanstvo").insertOne({
      ime: data.ime.trim(),
      prezime: data.prezime.trim(),
      godina: data.godina,
      email: data.email.trim(),
      telefon: data.telefon.trim(),
      poruka: data.poruka?.trim() || "",
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Успешно се пријавивте за членство." },
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
