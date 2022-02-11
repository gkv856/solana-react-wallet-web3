import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Menu } from "semantic-ui-react";
import { useWallet } from "@solana/wallet-adapter-react";

const MenuBar = (props) => {
  const wallet = useWallet();

  return (
    <Menu size="large">
      <Menu.Item>
        <img alt="logo" src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>

      <Menu.Menu position="right">
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
        {!wallet.publicKey && "ok"}
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
