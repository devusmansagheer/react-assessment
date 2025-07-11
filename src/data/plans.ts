import type { Plan } from "../types/Plan";

export const plans: Plan[] = [
  {
    planName: "Starter",
    price: "$9/mo",
    features: ["1 user", "5GB storage", "Email support"],
  },
  {
    planName: "Pro",
    price: "$29/mo",
    features: [
      "5 users",
      "50GB storage",
      "Priority email support",
      "Advanced analytics",
    ],
  },
  {
    planName: "Enterprise",
    price: "Contact Sales",
    features: [
      "5 users",
      "50GB storage",
      "Priority email support",
      "Advanced analytics",
    ],
  },
];
