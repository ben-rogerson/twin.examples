import { type AppType } from "next/dist/shared/lib/utils";
import GlobalStyles from "~/styles/GlobalStyles";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
