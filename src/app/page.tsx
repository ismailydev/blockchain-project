import { DataTable, tokenColumns } from '@/components/organisms';

const tokens = [
  {
    name: 'BTC',
    currency: 'USD',
    lastTrade: '63000.0',
    percent24h: '-2.21',
    change24h: '-1426.18',
  },
  {
    name: 'ETH',
    currency: 'USD',
    lastTrade: '3408.9',
    percent24h: '-0.33',
    change24h: '-11.2',
  },
  {
    name: 'DOGE',
    currency: 'USD',
    lastTrade: '0.15',
    percent24h: '15.75',
    change24h: '0.02',
  },
  {
    name: 'ALGO',
    currency: 'USD',
    lastTrade: '0.15',
    percent24h: '0.0',
    change24h: '0.0',
  },
  {
    name: 'DOT',
    currency: 'USD',
    lastTrade: '5.64',
    percent24h: '0.0',
    change24h: '0.0',
  },
  {
    name: 'UNI',
    currency: 'USD',
    lastTrade: '9.79',
    percent24h: '0.0',
    change24h: '0.0',
  },
  {
    name: 'COMP',
    currency: 'USD',
    lastTrade: '45.67',
    percent24h: '-0.95',
    change24h: '-0.44',
  },
];

export default function Home() {
  return (
    <main className="p-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <div className="text-center text-white spac-y-8">
          <h1 className="mx-auto text-6xl">
            Easy send and Request
            <br />
            Crypto.
          </h1>
          <p className="mx-auto text-xl py-2">
            Bring blockchain to the people. Solana supports experiences
            <br />
            for power users, new consumers, and everyone in between.
          </p>
        </div>
        <DataTable data={tokens} columns={tokenColumns} />
      </div>
    </main>
  );
}
