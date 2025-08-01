import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { ime, prezime, godina, email, telefon, poruka } = data;

    if (!ime || !prezime || !godina || !email || !telefon) {
      return NextResponse.json(
        { error: "Сите задолжителни полиња мора да бидат пополнети." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bushidosan");

    await db.collection("clanstvo").insertOne({
      ime,
      prezime,
      godina,
      email,
      telefon,
      poruka: poruka || "",
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
