const assets = [

  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$108,240",
    change: "+3.42%",
  },

  {
    name: "Nasdaq",
    symbol: "IXIC",
    price: "18,420",
    change: "+1.12%",
  },

  {
    name: "S&P 500",
    symbol: "SPX",
    price: "5,880",
    change: "+0.84%",
  },

  {
    name: "Gold",
    symbol: "XAU",
    price: "$2,420",
    change: "-0.22%",
  },

];

export default function MarketOverview() {

  return (

    <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-zinc-500 mb-2">
            Mercados
          </p>

          <h2 className="text-3xl font-black text-white">
            Market Overview
          </h2>

        </div>

        <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
          Live
        </div>

      </div>

      <div className="space-y-4">

        {assets.map((asset) => (

          <div
            key={asset.symbol}
            className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.05] transition"
          >

            <div>

              <h3 className="text-white font-semibold text-lg">
                {asset.name}
              </h3>

              <p className="text-zinc-500 text-sm">
                {asset.symbol}
              </p>

            </div>

            <div className="text-right">

              <p className="text-white font-bold text-xl">
                {asset.price}
              </p>

              <p
                className={`text-sm font-medium ${
                  asset.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {asset.change}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}