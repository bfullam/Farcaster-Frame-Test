"use client";
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DynamicContextProvider 
        settings={{ 
          environmentId: '7c8a7b2a-5faf-4b2f-9acb-0720d58dafa2',
          walletConnectors: [ EthereumWalletConnectors ],
        }}> 
        <DynamicWidget />
        <body>{children}</body>
      </DynamicContextProvider> 
    </html>
  )
}
