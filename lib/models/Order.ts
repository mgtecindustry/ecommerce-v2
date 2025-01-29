import mongoose, { Schema } from "mongoose";

interface IOrder {
  numarComanda: string;
  userId: string;
  nume: string;
  telefon: string;
  email: string;
  adresa: string;
  judet: string;
  oras: string;
  codPostal: string;
  curier: string;
  totalAmount: number;
  products: { id: string; quantity: number }[];
}

const orderSchema = new Schema<IOrder>({
  numarComanda: { type: String, required: true },
  userId: { type: String, required: true },
  nume: { type: String, required: true },
  telefon: { type: String, required: true },
  email: { type: String, required: true },
  adresa: { type: String, required: true },
  judet: { type: String, required: true },
  oras: { type: String, required: true },
  codPostal: { type: String, required: true },
  curier: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  products: [
    {
      id: { type: String, required: true }, // Folosim String în loc de ObjectId
      quantity: { type: Number, required: true },
    },
  ],
});

// Creează modelul
const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
