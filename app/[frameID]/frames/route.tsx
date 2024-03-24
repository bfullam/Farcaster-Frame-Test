/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { createFrames } from "frames.js/next";
import { sql } from '@vercel/postgres';

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  if (ctx.message?.transactionId) {
    return {
      image: (
        <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
          Transaction submitted! {ctx.message.transactionId}
        </div>
      ),
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="link"
          target={`https://base-sepolia.blockscout.com/tx/${ctx.message.transactionId}`}
        >
          View on block explorer
        </Button>,
      ],
    };
  }

  // Get the frame ID from the context URL
  const frameID = ctx.url.pathname.split("/")[1];

  // Get frame data from the database
  const {rows} = await sql`SELECT * FROM frames WHERE frameid = ${frameID}`;
  const frameData = rows[0];

  return {
    image: frameData.imageurl,
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button action="tx" target={`/${ctx.url.pathname.split("/")[1]}/txdata`} post_url="/frames">
        Buy now 🎁
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
