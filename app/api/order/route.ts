import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Order from "@/lib/models/Order";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Datele primite în endpoint:", data);

  try {
    await connectToDatabase();

    // Nu mai este necesară conversia la ObjectId
    const newOrder = new Order(data);

    if (!newOrder) {
      return NextResponse.json(
        { message: "Nu s-a putut creea comanda" },
        { status: 400 }
      );
    }

    await newOrder.save();

    return NextResponse.json({ message: "Order created successfully" });
  } catch (error) {
    console.error("Eroare la creearea comenzii", error);
    return NextResponse.json(
      { message: "Eroare la salvarea comenzii" },
      { status: 500 }
    );
  }
}
