"use client";

import { createContext, useContext } from "react";
import type frDict from "@/app/[lang]/dictionaries/fr.json";

export type Dictionary = typeof frDict;

const DictionaryContext = createContext<Dictionary | null>(null);

export function DictionaryProvider({
  children,
  dictionary,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): Dictionary {
  const ctx = useContext(DictionaryContext);
  if (!ctx) throw new Error("useDictionary must be used within DictionaryProvider");
  return ctx;
}
