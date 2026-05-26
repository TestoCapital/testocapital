"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Ene", value: 4000 },
  { name: "Feb", value: 5200 },
  { name: "Mar", value: 4800 },
  { name: "Abr", value: 6100 },
  { name: "May", value: 7400 },
  { name: "Jun", value: 8200 },
  { name: "Jul", value: 9200 },
];

export default function PortfolioChart() {
  return (
    <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8">

      <div className="mb-8">

        <p className="text-zinc-500 mb-2">
          Balance portfolio
        </p>

        <h2 className="text-5xl font-black text-white">
          €92.430
        </h2>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="color"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#3b82f6"
                  stopOpacity={0.5}
                />

                <stop
                  offset="100%"
                  stopColor="#3b82f6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={4}
              fill="url(#color)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}