import { Menu } from "semantic-ui-react";
import GetWallet from "../../web3/GetWallet.js";

const MenuBar = () => {
  return (
    <Menu size="large">
      <Menu.Item>
        <img alt="logo" src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <GetWallet />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
