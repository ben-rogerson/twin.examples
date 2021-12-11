import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz";
import { Fragment } from "react";
import GlobalStyles from "./../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      {getLayout(
        <Fragment>
          <GlobalStyles />
          <Component {...pageProps} />
        </Fragment>
      )}
    </ErrorBoundary>
  );
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <ErrorComponent
      statusCode={error.statusCode || 400}
      title={error.message || error.name}
    />
  );
}
