import React from "react";
import { IceCream, Store, Star, UserRound } from "lucide-react";

/**
 * StatsStrip
 * Clean, responsive KPI strip like the reference.
 * - Tailwind only, no external CSS
 * - Icons from lucide-react
 * - Easily swap copy/values via `items` prop
 */

const defaultItems = [
  { icon: IceCream, value: 42, label: "Variant Flavor" },
  { icon: Store, value: 15, label: "Branch Shop" },
  { icon: Star, value: 280, label: "Satisfied Client" },
  { icon: UserRound, value: 30, label: "Professional Staff" },
];

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-amber-500" strokeWidth={2.2} />
      </div>

      <div className="relative leading-none mb-2">
        <span className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight">
          {value}
        </span>
        <span className="align-super text-amber-500 text-xl font-bold ml-1">+</span>
      </div>

      <p className="text-neutral-600 text-lg md:text-xl">{label}</p>
    </div>
  );
}

export default function StatsStrip({ items = defaultItems, className = "" }) {
  return (
    <section className={`w-full py-10 md:py-14 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
          {items.map((item, idx) => (
            <StatCard key={idx} {...item} />)
          )}
        </div>
      </div>
    </section>
  );
}

// Usage example:
// <StatsStrip />
// or pass your own items
// <StatsStrip items={[
//   { icon: IceCream, value: 50, label: "Flavors" },
//   { icon: Store, value: 18, label: "Branches" },
//   { icon: Star, value: 320, label: "Happy Clients" },
//   { icon: UserRound, value: 40, label: "Team Members" },
// ]} />
