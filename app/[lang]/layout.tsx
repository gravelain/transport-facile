import { getDictionary, hasLocale, locales } from "./dictionaries";
import { DictionaryProvider } from "@/context/DictionaryContext";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // Next.js 16 generates LayoutProps with params: Promise<unknown>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Promise<any>;
}) {
  const { lang } = await params;
  const locale = hasLocale(String(lang ?? "")) ? (lang as "fr" | "en") : "fr";
  const dictionary = await getDictionary(locale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      {children}
    </DictionaryProvider>
  );
}
