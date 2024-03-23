import { TransactionTargetResponse } from "frames.js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  if (process.env.TO_ADDRESS === undefined) {
    throw new Error("Missing TO_ADDRESS environment variable");
  }
  if (process.env.TRANSACTION_VALUE === undefined) {
    throw new Error("Missing TRANSACTION_VALUE environment variable");
  }

  return NextResponse.json({
    chainId: "eip155:84532", // Base Sepolia Testnet
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: `0x${process.env.TO_ADDRESS}`,
      value: process.env.TRANSACTION_VALUE,
    },
  });
}