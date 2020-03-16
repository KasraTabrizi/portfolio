import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html style={{ backgroundColor: "black", height: "99%" }}>
        <Head>
          <style>{`#__next { height:100%; }`}</style>
        </Head>

        <body
          style={{
            backgroundColor: "black",
            height: "95%"
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
