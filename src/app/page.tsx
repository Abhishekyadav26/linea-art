"use client";
import NFTClaimer  from "@/app/components/NFTClaimer"
import { defineChain, getContract } from "thirdweb";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { lineaAddress, client } from "./client";

export default function Home() {
  const account = useActiveAccount();

  const lineaContract = getContract({
    client: client,
    chain: defineChain(59141),
    address: lineaAddress,
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 cursor-pointer">
        Buy your Favourite
          <br />
           <span className="text-blue-700" >Art Work</span>
        </h1>
        <div className="text-center ">
        <ConnectButton 
          client={client}
        />
        </div>
        <div className="flex flex-row">
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={lineaContract}
          tokenId={0n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={lineaContract}
          tokenId={1n}
        />
        </div>
      </div>
    </main>
  );
}
