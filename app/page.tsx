"use client";
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import EcomForm from './components/EcomForm';
 
export default async function Home(submitForm: any) {     
    return (
        <DynamicContextProvider 
        settings={{ 
          environmentId: '7c8a7b2a-5faf-4b2f-9acb-0720d58dafa2',
          walletConnectors: [ EthereumWalletConnectors ],
        }}>
            <DynamicWidget />
            <EcomForm/>
        </DynamicContextProvider> 
    );
}