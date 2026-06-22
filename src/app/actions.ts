"use server";

export type LeadState = { error?: string; success?: boolean };

export async function submitLead(_prev: LeadState, data: FormData): Promise<LeadState> {
  // Honeypot check
  if (data.get("company")) return { error: "Something went wrong. Please try again." };

  const name = data.get("name")?.toString().trim();
  const phone = data.get("phone")?.toString().trim();
  const email = data.get("email")?.toString().trim();

  if (!name || !phone || !email) {
    return { error: "Please fill in your name, phone, and email." };
  }

  // TODO: wire up Supabase insert + Resend email notification
  // const { error } = await supabase.from("leads").insert({ ... });

  return { success: true };
}
