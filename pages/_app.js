import { Provider } from "react-redux";
import store from "../yApps/store/index";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Layout from "../yApps/components/gen/Layout";
// import MenuBar from "../yApps/components/gen/MenuBar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
