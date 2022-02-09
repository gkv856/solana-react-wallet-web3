import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  useWallet,
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import { clusterApiUrl } from "@solana/web3.js";
import { useDispatch, useSelector } from "react-redux";
import { web3Actions } from "../store/web3Slice";
import { useEffect, useState } from "react";

const NETWORK = WalletAdapterNetwork.Devnet;
const CONN_URL = clusterApiUrl(NETWORK);

const WALLETS = [
  new PhantomWalletAdapter(),
  new SlopeWalletAdapter(),
  new TorusWalletAdapter(),
  new LedgerWalletAdapter(),
];

/* wallet configuration as specified here: https://github.com/solana-labs/wallet-adapter#setup */
const GetWallet = () => {
  const wallet = useSelector((state) => state.web3Slice.wallet);
  const dispatch = useDispatch();

  const getWalletConnection = () => {
    if (!wallet) {
      dispatch(web3Actions.getWallet());
    } else if (!wallet.connected) {
      return <WalletMultiButton />;
    } else {
      // we are treturning ok just to avoid warning on the cosole reg. button in a menu div
      return "ok";
    }
  };

  return (
    <ConnectionProvider endpoint={CONN_URL}>
      <WalletProvider wallets={WALLETS} autoConnect={true}>
        <WalletModalProvider>{getWalletConnection()}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default GetWallet;
