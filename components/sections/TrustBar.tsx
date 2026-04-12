import type { Dictionary } from "@/context/DictionaryContext";

type Props = { dict: Dictionary["trustBar"] };

const paymentMethods = [
  { name: "Mobile Money", color: "bg-yellow-400", textColor: "text-yellow-900" },
  { name: "Wave", color: "bg-blue-400", textColor: "text-white" },
  { name: "Orange Money", color: "bg-orange-500", textColor: "text-white" },
  { name: "MTN MoMo", color: "bg-yellow-500", textColor: "text-black" },
  { name: "Carte bancaire", color: "bg-blue-700", textColor: "text-white" },
  { name: "Stripe", color: "bg-indigo-600", textColor: "text-white" },
];

const uspIcons = [
  <svg key="smile" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="payment" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2v-1a7 7 0 00-14 0v1a2 2 0 002 2zM12 11a4 4 0 100-8 4 4 0 000 8z" />
  </svg>,
  <svg key="shield" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="bolt" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

export default function TrustBar({ dict }: Props) {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* USPs */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            {dict.badge}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {dict.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-14">
          {dict.usps.map((usp, i) => (
            <div
              key={usp.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center mb-4">
                {uspIcons[i]}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{usp.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
            {dict.paymentTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method.name}
                className={`${method.color} ${method.textColor} text-xs font-bold px-4 py-2 rounded-full shadow-sm`}
              >
                {method.name}
              </span>
            ))}
            <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full">
              {dict.paymentMore}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-4 max-w-md mx-auto">
            {dict.paymentCaption}
          </p>
        </div>
      </div>
    </section>
  );
}
