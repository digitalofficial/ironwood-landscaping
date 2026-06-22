"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitLead, type LeadState } from "@/app/actions";

const services = ["Weekly maintenance", "Landscape design", "Hardscaping", "Irrigation", "Tree & shrub care", "Seasonal cleanup", "Something else"];
const field = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 focus:border-cactus focus:outline-none transition-colors";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="rounded-full bg-sage px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-bark transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
      {pending ? "Sending\u2026" : "Send request"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState<LeadState, FormData>(submitLead, {});
  return (
    <form action={formAction} className="space-y-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink/70 mb-1.5">Name</label>
          <input id="name" name="name" required className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink/70 mb-1.5">Phone</label>
          <input id="phone" name="phone" type="tel" required className={field} placeholder="(520) 555-0123" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink/70 mb-1.5">Email</label>
        <input id="email" name="email" type="email" required className={field} placeholder="jane@email.com" />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-ink/70 mb-1.5">Property address <span className="text-ink/35">(optional)</span></label>
        <input id="address" name="address" className={field} placeholder="Neighborhood or full address" />
      </div>

      <div>
        <label htmlFor="service_type" className="block text-sm font-medium text-ink/70 mb-1.5">What do you need?</label>
        <select id="service_type" name="service_type" defaultValue="Weekly maintenance" className={field}>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink/70 mb-1.5">Tell us about your property <span className="text-ink/35">(optional)</span></label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Yard size, current condition, what you're looking for..." />
      </div>

      {state?.error && (
        <p role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{state.error}</p>
      )}

      <div className="flex items-center gap-4 pt-2">
        <SubmitButton />
        <span className="text-xs text-ink/45">We reply within one business day.</span>
      </div>
    </form>
  );
}
