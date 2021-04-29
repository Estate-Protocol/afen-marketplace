import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/layout";
// import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
