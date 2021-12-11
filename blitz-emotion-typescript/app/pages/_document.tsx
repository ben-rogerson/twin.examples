import { Fragment } from "react";
import {
  Document,
  Html,
  DocumentHead,
  Main,
  BlitzScript /*DocumentContext*/,
} from "blitz";
import { extractCritical } from "@emotion/server";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(" ")}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </Fragment>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
