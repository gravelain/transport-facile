"use client";

import { useState } from "react";

type DemoFormState = {
  name: string;
  whatsapp: string;
  agency: string;
};

const initialState: DemoFormState = {
  name: "",
  whatsapp: "",
  agency: "",
};

type Props = {
  triggerLabel?: string;
  triggerClassName?: string;
};

export default function DemoModal({
  triggerLabel = "Demander une démo gratuite",
  triggerClassName = "",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<DemoFormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
    setForm(initialState);
  };

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={triggerClassName}>
        {triggerLabel}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-blue-950/75 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md z-10 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-orange-500" />

            <div className="p-8">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {submitted ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">C&apos;est noté !</h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                    On vous contacte sur WhatsApp d&apos;ici quelques heures pour fixer votre créneau de démo. Gratuit et sans engagement.
                  </p>
                  <button
                    onClick={handleClose}
                    className="text-blue-700 font-medium text-sm hover:underline"
                  >
                    Fermer
                  </button>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                        Démo gratuite
                      </span>
                    </div>
                    <h2
                      id="demo-modal-title"
                      className="text-2xl font-bold text-gray-900 leading-tight"
                    >
                      Voyez Transport Facile en action
                    </h2>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                      30 minutes — en visio ou en présentiel à Abidjan. On vous montre exactement ce que ça donne pour votre agence. Aucune obligation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label
                        htmlFor="demo-name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Votre nom{" "}
                        <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="demo-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Konan Didier"
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="demo-whatsapp"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Numéro WhatsApp{" "}
                        <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="demo-whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="+225 07 XX XX XX XX"
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                      <p className="text-xs text-gray-400 mt-1">
                        On vous contacte sur WhatsApp pour planifier votre créneau.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="demo-agency"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Nom de votre agence{" "}
                        <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="demo-agency"
                        name="agency"
                        type="text"
                        required
                        value={form.agency}
                        onChange={handleChange}
                        placeholder="Agence Express CI"
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Je veux voir la démo
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      Gratuit · Sans engagement · 30 minutes chrono
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
