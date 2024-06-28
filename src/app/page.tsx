import { DataTable, tokenColumns } from '@/components/organisms';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '@/components/atoms';
import Image from 'next/image';
import { BNBIcon, BTCIcon, SettingsIcon, SwapIcon, TrendUpIcon } from '@/constants/icons';
import { ChevronRightIcon } from 'lucide-react';
import { BNBLineChart, BTCBarChart, BTCLineChart } from '@/constants/images';
// import axios from 'axios';
import { Token } from '@prisma/client';

const getTokens = async (): Promise<Token[]> => {
  const res = await fetch('http://localhost:3000/api/tokens');
  const data = await res.json();

  return await data;
};

export default async function Home() {
  const tokens = await getTokens();

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
        <Card className="w-full bg-transparent p-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="uppercase text-white">Swap Tokens</CardTitle>
              <Image src={SettingsIcon} alt="settings icon" width={32} height={32} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5"></div>
              <div className="flex flex-col space-y-1.5"></div>
            </div>
            <div className="flex flex-col items-center gap-6 justify-center">
              <div className="relative flex w-full">
                <div className="flex flex-col md:flex-row gap-2 bg-dark-background px-12 py-2 rounded-l-md justify-between flex-1 border-r border-black">
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="remove-arrow text-white text-5xl bg-transparent py-8 px-0 border-none outline-none focus-visible:ring-0 focus-visible:border-0 placeholder:text-light font-semibold"
                    />
                    <p className="text-dark">$0.00</p>
                  </div>
                  <div className="flex flex-col self-center gap-2">
                    <div className="p-2 py-1 flex gap-2 items-center bg-black">
                      <Image src={BTCIcon} alt="btc icon" width={32} height={32} />
                      <div className="flex items-center gap-1">
                        <p className="text-dark text-xl font-medium">BTC</p>
                        <ChevronRightIcon className="w-4 h-4 text-dark" />
                      </div>
                    </div>
                    <div>
                      <p className="text-light text-sm">
                        Balance: <span className="text-blue-500">24,240</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x transform translate-x-[-50%] translate-y-[-50%] bg-black rounded-full w-12 h-12 flex items-center justify-center">
                  <Image src={SwapIcon} alt="swap icon" width={32} height={32} />
                </div>
                <div className="flex flex-col md:flex-row gap-2 bg-dark-background px-12 py-2 rounded-r-md justify-between flex-1 border-l border-black">
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="remove-arrow text-white text-5xl bg-transparent py-8 px-0 border-none outline-none focus-visible:ring-0 focus-visible:border-0 placeholder:text-light font-semibold"
                    />
                    <p className="text-dark">$0.00</p>
                  </div>
                  <div className="flex flex-col self-center gap-2">
                    <div className="p-2 py-1 flex gap-2 items-center bg-black">
                      <Image src={BNBIcon} alt="btc icon" width={32} height={32} />
                      <div className="flex items-center gap-1">
                        <p className="text-dark text-xl font-medium">BNB</p>
                        <ChevronRightIcon className="w-4 h-4 text-dark" />
                      </div>
                    </div>
                    <div>
                      <p className="text-light text-sm">
                        Balance: <span className="text-blue-500">63,790</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="uppercase w-60">Swap Tokens</Button>
            </div>
            <CardFooter className="text-sm flex items-center justify-between p-0 pt-5">
              <div className="text-light">
                <p>1 BTC = 32.4039 ETH</p>
                <p className="text-blue-500">Free exchange</p>
              </div>
              <p className="text-dark">Updates in 4s</p>
            </CardFooter>
          </CardContent>
        </Card>
        <Card className="w-full md:w-1/2 bg-transparent p-4">
          <CardHeader>
            <CardTitle className="text-light uppercase">Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-5xl text-light">
                  $124,248
                  <span className="text-dark">.23</span>
                </h3>
                <div className="flex items-center gap-2">
                  <Image src={TrendUpIcon} alt="trend up icon" width={24} height={24} className="mt-1" />
                  <p className="text-success-dark text-lg">$7,359.81</p>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <Button
                  variant="outline"
                  className="w-full text-light uppercase bg-transparent border-primary hover:bg-transparent">
                  Deposit
                </Button>
                <Button className="w-full uppercase">Trade</Button>
              </div>
              <div className="flex flex-col space-y-1.5 text-light">
                <p>All Assets</p>
                <div className="bg-dark-background flex gap-2 items-center p-4">
                  <Image src={BTCIcon} alt="BTC icon" width={32} height={32} />
                  <p className="text-xl">BTC</p>
                  <div className="flex-1">
                    <Image src={BTCLineChart} alt="btc line chart" width={185} height={40} />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">$32,532.45</p>
                    <p className="bg-error text-xs p-1 text-black">-0.01%</p>
                  </div>
                </div>
                <div className="bg-dark-background flex gap-2 items-center p-4">
                  <Image src={BNBIcon} alt="BNB icon" width={32} height={32} />
                  <p className="text-xl">BNB</p>
                  <div className="flex-1">
                    <Image src={BNBLineChart} alt="bnb line chart" width={185} height={40} />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">$12,564.12</p>
                    <p className="bg-success text-xs p-1 text-black">+4.58%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full bg-transparent p-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="https://i.ibb.co/ZNq0wv6/cryptocurrency-color-btc.png"
                  alt="btc icon"
                  width={64}
                  height={64}
                />
                <div className="flex flex-col gap-1">
                  <CardDescription className="text-xl">Market Summary</CardDescription>
                  <CardTitle className="text-2xl text-light">Bitcoin</CardTitle>
                </div>
              </div>
              <Button className="w-60 uppercase">Follow</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-5xl text-light">
                  $64.270
                  <span className="text-dark">.00</span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Image src={TrendUpIcon} alt="trend up icon" width={24} height={24} className="mt-1" />
                <p className="text-success-dark">$1.42 (0.0012%) today</p>
              </div>
              <div className="w-full h-full">
                <Image src={BTCBarChart} alt="btc bar chart" width={1100} height={240} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
