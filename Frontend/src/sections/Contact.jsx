import { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { GlassCard } from "../components/GlassCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { contact } from "../constants/site";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "visitor"}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
  );

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Have an idea, role, or project?"
        text="Send a message from the frontend form. It opens your mail client, so there is no backend, database, or API involved."
      />
      <Reveal>
        <GlassCard className="mx-auto max-w-3xl p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-3 text-cyan-100">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-cyan-200/12">
              <FiMail />
            </span>
            <a href={`mailto:${contact.email}`} className="text-sm sm:text-base">
              {contact.email}
            </a>
          </div>
          <form className="grid gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-field"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-field"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="form-field resize-none"
            />
            <a
              href={`mailto:${contact.email}?subject=${subject}&body=${body}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.38)] transition hover:bg-white"
            >
              <FiSend /> Send Message
            </a>
          </form>
        </GlassCard>
      </Reveal>
    </section>
  );
};
