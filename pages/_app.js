import { ThemeProvider } from "next-themes";
import { UserProvider } from "../components/User";
import { ContractProvider } from "../components/Contract";
import "../styles/globals.css";
import Layout from "../components/layout";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem attribute="class">
      <UserProvider>
        <ContractProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContractProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
