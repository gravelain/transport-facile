"use client";

import { usePathname, useRouter } from "next/navigation";

const LOCALES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname: /fr/... or /en/...
  const segments = pathname.split("/");
  const currentLocale = segments[1] === "en" ? "en" : "fr";

  const switchTo = (locale: string) => {
    if (locale === currentLocale) return;
    // Replace the locale segment
    segments[1] = locale;
    router.push(segments.join("/") || `/${locale}`);
  };

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-gray-200 p-0.5 bg-gray-50">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          aria-label={`Switch to ${label}`}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
            currentLocale === code
              ? "bg-blue-700 text-white shadow-sm"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
