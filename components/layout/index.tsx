import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { BaseComponent } from "@/types/BaseComponent";

export const Layout: React.FC = (props: BaseComponent) => {
  return (
    <div>
      <Head>
        {/* TODO: Page provider */}
        <title>AFEN Art Marketplace</title>
        <meta
          name="description"
          content="AFEN has the objective of combining blockchain’s immutable data structure and the backing of government bodies to provide legitimacy to products"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Manrope/Manrope-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Manrope/Manrope-Medium.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header {...props} />
      <div className="px-1 flex flex-col justify-center align-middle min-h-screen dark:bg-afen-blue">
        {/* Body */}
        {/* Notification */}
        <main className="h-min-screen font-medium tracking-tight">
          <div>{props.children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
