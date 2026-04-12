"use client";

import { useState } from "react";
import type { Dictionary } from "@/context/DictionaryContext";

type Props = { dict: Dictionary["simulator"] };

const PLAN_RATES = [0.03, 0.025];
const PLAN_LABELS = ["3%", "2,5%"];

function formatNum(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u202F");
}

function formatFCFA(n: number): string {
  return formatNum(n) + "\u00A0FCFA";
}

export default function RevenueSimulator({ dict }: Props) {
  const [tickets, setTickets] = useState(50);
  const [prix, setPrix] = useState(5500);
  const [planIdx, setPlanIdx] = useState(1); // Pro by default

  const rate = PLAN_RATES[planIdx];
  const label = PLAN_LABELS[planIdx];
  const planName = planIdx === 0 ? dict.planLabel.split(" ")[0] : "Pro";

  const daily = tickets * prix;
  const commission = daily * rate;
  const net = daily - commission;
  const netMonthly = net * 30;
  const commissionMonthly = commission * 30;
  const saving = daily * (PLAN_RATES[0] - PLAN_RATES[1]) * 30;

  return (
    <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-base leading-tight">{dict.title}</p>
            <p className="text-blue-200 text-xs mt-0.5">{dict.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Sliders */}
        <div className="space-y-5">
          {/* Tickets per day */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">{dict.ticketsLabel}</label>
              <span className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-0.5 rounded-full">
                {tickets} {dict.ticketsUnit}
              </span>
            </div>
            <input
              type="range" min={10} max={300} step={5} value={tickets}
              onChange={(e) => setTickets(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-700"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>10</span><span>150</span><span>300</span>
            </div>
          </div>

          {/* Average price */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">{dict.priceLabel}</label>
              <span className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-0.5 rounded-full">
                {formatNum(prix)}&nbsp;FCFA
              </span>
            </div>
            <input
              type="range" min={2000} max={15000} step={500} value={prix}
              onChange={(e) => setPrix(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-700"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>2 000</span><span>8 500</span><span>15 000</span>
            </div>
          </div>
        </div>

        {/* Plan toggle */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            {dict.planLabel}
          </p>
          <div className="flex rounded-xl border border-gray-200 overflow-hidden">
            {["Essentiel · 3%", "Pro · 2,5%"].map((name, i) => (
              <button
                key={i}
                onClick={() => setPlanIdx(i)}
                className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
                  planIdx === i ? "bg-blue-700 text-white" : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 rounded-xl p-5 space-y-4">
          {/* Main result */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">{dict.netLabel}</p>
            <p className="text-4xl font-extrabold text-gray-900 leading-none">
              {formatNum(Math.round(netMonthly / 1000))}{" "}
              <span className="text-2xl text-gray-500 font-bold">{dict.netUnit}</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {dict.netDay} {formatFCFA(net)} {dict.netDayUnit}
            </p>
          </div>

          {/* Breakdown */}
          <div className="border-t border-gray-200 pt-4 space-y-2.5">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{dict.grossLabel}</span>
              <span className="font-semibold text-gray-900">{formatFCFA(daily * 30)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{dict.commissionLabel} ({label})</span>
              <span className="font-semibold text-orange-600">− {formatFCFA(commissionMonthly)}</span>
            </div>
            <div className="flex justify-between text-sm border-t border-dashed border-gray-200 pt-2.5">
              <span className="font-bold text-gray-900">{dict.encaisseLabel}</span>
              <span className="font-extrabold text-blue-700">{formatFCFA(netMonthly)}</span>
            </div>
          </div>

          {/* Pro upsell */}
          {planIdx === 0 && saving > 0 && (
            <div
              className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 flex items-start gap-2.5 cursor-pointer"
              onClick={() => setPlanIdx(1)}
            >
              <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p className="text-xs text-orange-700 leading-relaxed">
                <strong>{dict.proUpsell}</strong>{" "}
                <strong>{formatFCFA(saving)}</strong>{" "}
                {dict.proUpsellSuffix}
              </p>
            </div>
          )}

          {planIdx === 1 && (
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 flex items-start gap-2.5">
              <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-green-700 leading-relaxed">{dict.proConfirm}</p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-center text-gray-400">{dict.disclaimer}</p>
      </div>
    </div>
  );
}
