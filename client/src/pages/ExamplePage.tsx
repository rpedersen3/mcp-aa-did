import { SendMcpMessage } from '../components/SendMcpMessage';
import '../custom-styles.css'
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ExamplePage: React.FC = () => {


  const handleAAWalletDeployed = (address: string) => {

  };

  return (
    <>
      <h2> Account Abstraction DID (did:aa:eip155:...) Example </h2>

      <ul>
        <li>Demonstrates MCP agent service request and recurring payments for Gator Lawn Service.</li>
        <li>Client and server MCP agents leveraging <a href="https://eips.ethereum.org/EIPS/eip-4337" target="_blank">ERC-4337</a> and <a href="https://eips.ethereum.org/EIPS/eip-7710" target="_blank">ERC-7710</a> for account abstraction.</li>
        <li>Client and server DID identification and verification leveraging <a href="https://eips.ethereum.org/EIPS/eip-1271" target="_blank">ERC-1271</a>.</li>
        <li>Client requests verifiable credentials and presentations using Veramo-based account abstraction DID management.</li>
        <li>Embedded native token stream payment permissions</li>
      </ul>

      <SendMcpMessage onAAWalletDeployed={handleAAWalletDeployed} />

      
    </>
  );
};

export default ExamplePage;
