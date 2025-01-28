import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import connectToDatabase from "@/lib/mongodb";
import Order from "@/lib/models/Order";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, currency, orderId } = body;

    // Creăm o sesiune de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: `Comanda #${orderId}`,
            },
            unit_amount: amount, // Stripe folosește cea mai mică unitate (bani, cenți etc.)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      metadata: { orderId },
      success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
    });

    // Returnăm URL-ul sesiunii de checkout către frontend
    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error: unknown) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
