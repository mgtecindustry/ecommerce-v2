import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Product from "@/lib/models/Product";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("id");

  if (productId) {
    try {
      await connectToDatabase();
      const product = await Product.findById(productId);

      if (!product) {
        return NextResponse.json(
          { message: "Produsul nu a fost găsit" },
          { status: 404 }
        );
      }

      return NextResponse.json(product);
    } catch (error) {
      console.error("Eroare la obținerea produsului:", error);
      return NextResponse.error();
    }
  } else {
    return NextResponse.json(
      { message: "ID-ul produsului este necesar" },
      { status: 400 }
    );
  }
}
