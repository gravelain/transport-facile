"use client";

import { useState } from "react";
import { useDictionary } from "@/context/DictionaryContext";
import { WHATSAPP_NUMBER } from "@/lib/constants";

type RequestType = "question" | "partenariat" | "enterprise";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: RequestType;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  type: "question",
  message: "",
};

export default function Contact() {
  const dict = useDictionary();
  const d = dict.contact;

  const typeConfig = {
    question: d.types.question,
    partenariat: d.types.partenariat,
    enterprise: d.types.enterprise,
  } as const;

  const contactInfo = [
    {
      label: d.contactEmail,
      value: "contact@transport-facile.com",
      href: "mailto:contact@transport-facile.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: d.contactWhatsapp,
      value: d.contactWhatsappValue,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: d.contactLocation,
      value: d.contactLocationValue,
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setType = (type: RequestType) =>
    setForm((prev) => ({ ...prev, type }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", ...form }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Erreur réseau");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const current = typeConfig[form.type];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-blue-900" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start" suppressHydrationWarning>

          {/* ── Left ── */}
          <div>
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              {d.badge}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              {d.title}
            </h2>
            <p className="text-blue-200 leading-relaxed mb-10 max-w-sm">
              {d.subtitle}
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-blue-800 rounded-xl flex items-center justify-center text-blue-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 mb-0.5 font-medium uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-semibold hover:text-orange-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div className="flex items-start gap-3 bg-blue-800/50 rounded-xl px-5 py-4 border border-blue-700/40">
              <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-blue-200 text-sm leading-relaxed">
                {d.responseTimePre}{" "}
                <strong className="text-white">{d.responseTimeValue}</strong>.{" "}
                {d.responseNote}
              </p>
            </div>
          </div>

          {/* ── Right : Form ── */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 text-center flex flex-col items-center justify-center min-h-[420px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{d.successTitle}</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed mb-6">
                  {d.successDesc}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialState); }}
                  className="text-blue-700 text-sm font-semibold hover:underline"
                >
                  {d.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-7 sm:p-8 space-y-5"
                noValidate
              >
                {/* Type selector */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2.5">
                    {d.subjectLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(Object.entries(typeConfig) as [RequestType, typeof typeConfig[RequestType]][]).map(
                      ([key, config]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setType(key)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all text-center leading-tight ${
                            form.type === key
                              ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                              : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700"
                          }`}
                        >
                          {config.label}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Name + Agency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {d.nameLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder={d.namePlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {d.agencyLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="company" name="company" type="text" required
                      value={form.company} onChange={handleChange}
                      placeholder={d.agencyPlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Email + WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {d.emailLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder={d.emailPlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {d.phoneLabel}
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder={d.phonePlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {d.messageLabel}
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder={current.placeholder}
                    className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {d.sending}
                    </>
                  ) : (
                    current.cta
                  )}
                </button>

                {error && (
                  <p className="text-sm text-red-600 text-center bg-red-50 rounded-lg px-4 py-2.5">
                    {error}
                  </p>
                )}

                <p className="text-xs text-gray-400 text-center">{d.privacy}</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
