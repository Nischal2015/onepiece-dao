// import { BigNumber, ethers } from "ethers";
// import { ThirdwebSDK, TransactionResult } from "@thirdweb-dev/sdk";
// require('dotenv').config();

// const privateKey = process.env.PRIVATE_KEY as string;
// const sdk = new ThirdwebSDK(
//     new ethers.Wallet(
//     privateKey,
//     ethers.getDefaultProvider("YOUR_QUICKNODE_HTTP_URL")
//     )
// );

// let collectionAddress:string;
// let mintTxnHash:TransactionResult;

import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ethers from "ethers";
import "dotenv/config";

if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
  console.log("Private key not found");
}

if (!process.env.QUICKNODE_API_URL || process.env.QUICKNODE_API_URL === "") {
  console.log("Quicknode API URL not found");
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
  console.log("Wallet address not found");
}

const provider = new ethers.providers.JsonRpcProvider(
  process.env.QUICKNODE_API_URL
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const sdk = new ThirdwebSDK(wallet);

(async () => {
  try {
    const address = await sdk.getSigner()?.getAddress();
    console.log("SDK initialized by address:", address);
  } catch (error) {
    console.error("Failed to get apps from the sdk", error);
    process.exit(1);
  }
})();

export default sdk;
