import type { Dictionary } from "@/context/DictionaryContext";
import FAQItem from "@/components/ui/FAQItem";
import { WHATSAPP_NUMBER } from "@/lib/constants";

type Props = {
  dict: Dictionary["faq"];
  whatsappMessage: string;
};

export default function FAQ({ dict, whatsappMessage }: Props) {
  const { faqs, badge, title1, title2, subtitle, bottomTitle, bottomSubtitle, bottomCta } = dict;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            {badge}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {title1}{" "}
            <span className="text-blue-700">{title2}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">{subtitle}</p>
        </div>

        {/* Items — each manages its own open/closed state client-side */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-blue-700 rounded-2xl px-5 sm:px-8 py-7 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <p className="font-bold text-white text-lg">{bottomTitle}</p>
            <p className="text-blue-200 text-sm mt-1">{bottomSubtitle}</p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {bottomCta}
          </a>
        </div>
      </div>
    </section>
  );
}
