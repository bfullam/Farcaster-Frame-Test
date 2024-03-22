import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Beginn"
    }
  ],
  image: `https://framesjs.org/og.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Test Frame',
  description: 'A test frame',
  openGraph: {
    title: 'Test Frame',
    description: 'A test frame',
    images: [`https://framesjs.org/og.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Test Frame</h1>
    </>
  );
}
