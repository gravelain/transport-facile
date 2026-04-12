"use client";

import { usePathname, useRouter } from "next/navigation";

const LOCALES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

type Props = {
  /** "bar" = compact pour la barre mobile, "menu" = dans le menu déroulant, "desktop" = barre desktop */
  variant?: "bar" | "menu" | "desktop";
};

export default function LanguageSwitcher({ variant = "desktop" }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const currentLocale = segments[1] === "en" ? "en" : "fr";

  const switchTo = (locale: string) => {
    if (locale === currentLocale) return;
    segments[1] = locale;
    router.push(segments.join("/") || `/${locale}`);
  };

  /* ── Compact pill in mobile header bar ── */
  if (variant === "bar") {
    return (
      <div className="flex items-center rounded-md overflow-hidden border border-gray-200 bg-gray-50 h-8">
        {LOCALES.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => switchTo(code)}
            aria-label={`Switch to ${label}`}
            className={`w-8 h-full text-[11px] font-bold transition-all ${
              currentLocale === code
                ? "bg-blue-700 text-white"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }

  /* ── In mobile dropdown menu ── */
  if (variant === "menu") {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 font-medium">Langue</span>
        <div className="flex items-center rounded-md overflow-hidden border border-gray-200 bg-gray-50">
          {LOCALES.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => switchTo(code)}
              aria-label={`Switch to ${label}`}
              className={`px-3 py-1.5 text-xs font-bold transition-all ${
                currentLocale === code
                  ? "bg-blue-700 text-white"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ── Desktop pill ── */
  return (
    <div className="flex items-center rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          aria-label={`Switch to ${label}`}
          className={`px-3 py-1.5 text-xs font-bold transition-all ${
            currentLocale === code
              ? "bg-blue-700 text-white"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
