// app/api/products/route.ts
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Product from "@/lib/models/Product";

export async function GET() {
  try {
    // Conectează-te la baza de date
    await connectToDatabase();

    // Găsește toate produsele
    const products = await Product.find();

    // Returnează produsele în format JSON
    return NextResponse.json(products);
  } catch (error) {
    console.error("Eroare la obținerea produselor:", error);
    return NextResponse.error();
  }
}
