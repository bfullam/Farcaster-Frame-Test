import { TransactionTargetResponse } from "frames.js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  return NextResponse.json({
    chainId: "eip155:84532", // Base Sepolia Testnet
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: process.env.TO_ADDRESS,
      value: "50000000000000000",
    },
  });
}
