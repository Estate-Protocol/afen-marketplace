import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout(props) {
  return (
    <div>
      <Head>
        {/* TODO: Page provider */}
        <title>AFEN</title>
        <meta
          name="description"
          content="AFEN has the objective of combining blockchain’s immutable data structure and the backing of government bodies to provide legitimacy to products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TODO: isAuthenticated */}
      <Header />

      <div className="px-1 flex flex-col justify-center align-middle h-screen h-min-screen dark:bg-afen-blue">
        {/* Body */}
        <main className="h-min-screen font-semibold">
          <div>{props.children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
