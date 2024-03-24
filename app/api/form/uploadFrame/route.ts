
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  console.log(body);
 
  try {
    // const frameInsertionResult = await sql`INSERT INTO FRAMES (imageurl, receivingwallet, price) VALUES (${blob.url}, ${inputWalletRef.current.value}, ${inputPriceRef.current.value}) RETURNING *;`;
 
    return NextResponse.json({ message: 'Frame uploaded' });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}