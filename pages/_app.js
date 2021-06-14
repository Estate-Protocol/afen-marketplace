import { ThemeProvider } from "next-themes";
import { UserProvider } from "../components/User";
import "../styles/globals.css";
import Layout from "../components/layout";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem attribute="class">
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
