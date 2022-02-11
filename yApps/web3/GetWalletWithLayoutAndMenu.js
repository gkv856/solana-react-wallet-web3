import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletProvider,
  ConnectionProvider,
  useWallet,
  useConnection,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import { clusterApiUrl } from "@solana/web3.js";
import { useEffect, useMemo } from "react";

import { Button, Container, Menu } from "semantic-ui-react";
import MenuBar from "../components/gen/MenuBar";

/* wallet configuration as specified here: https://github.com/solana-labs/wallet-adapter#setup */
const GetWalletWithLayoutAndMenu = (props) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const NETWORK = WalletAdapterNetwork.Devnet;

  // the conn url shold be re executed only when the network variable changes
  const CONN_URL = useMemo(() => clusterApiUrl(NETWORK), [NETWORK]);

  // the WALLETS shold be re executed only when the network variable changes
  const WALLETS = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    [NETWORK]
  );

  return (
    <Container>
      <ConnectionProvider endpoint={CONN_URL}>
        <WalletProvider wallets={WALLETS} autoConnect={true}>
          <MenuBar />
          {props.children}
        </WalletProvider>
      </ConnectionProvider>
    </Container>
  );
};

export default GetWalletWithLayoutAndMenu;
