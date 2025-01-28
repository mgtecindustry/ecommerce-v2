import formSchema, { defaultValues } from "@/lib/zod";
import { create } from "zustand";
import { z } from "zod";

interface CheckoutStore {
  formData: z.infer<typeof formSchema>;
  setFormData: (data: z.infer<typeof formSchema>) => void;
  courier: string;
  setCourier: (courier: string) => void;
  adresa: string;
  judet: string;
  codPostal: string;
  telefon: string;
  tipCurier: string;
}

export const CheckoutStore = create<CheckoutStore>()((set) => ({
  formData: defaultValues,
  setFormData: (data) => set({ formData: data }),
  courier: "",
  setCourier: (courier) => set({ courier }),
  adresa: "",
  judet: "",
  codPostal: "",
  telefon: "",
  tipCurier: "",
}));
