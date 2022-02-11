import { Provider } from "react-redux";
import store from "../yApps/store/index";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import GetWalletWithLayoutAndMenu from "../yApps/web3/GetWalletWithLayoutAndMenu";
// import MenuBar from "../yApps/components/gen/MenuBar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GetWalletWithLayoutAndMenu>
        <Component {...pageProps} />
      </GetWalletWithLayoutAndMenu>
    </Provider>
  );
}

export default MyApp;
