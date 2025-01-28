import { Metadata } from "@/lib/types/Metadata";

export const createCheckoutSession = async (
  items: any[],
  metadata: Metadata,
  shippingCost: number
) => {
  const totalAmount =
    items.reduce((acc, item) => acc + item.product.price * item.quantity, 0) +
    shippingCost;

  const response = await fetch("/api/stripe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: totalAmount * 100,
      currency: "ron",
      orderId: metadata.orderNumber,
    }),
  });
  if (!response.ok) {
    console.error("Eroare la crearea sesiunii de checkout");
    return null;
  }

  const sessionData = await response.json();
  return sessionData;
};
