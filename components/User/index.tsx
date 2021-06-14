import { ethers } from "ethers";
import React, { useState } from "react";
import WalletConnect from "@walletconnect/client";
import { WalletConnectActions } from "./handlers";
import { IAssetData } from "utils/types";

export type IUserContext = {
  account: any;
  balance: number;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  mobileWalletConnect: WalletConnectActions | null;
  assets: IAssetData[];
  loading: boolean;
  signer: ethers.providers.JsonRpcSigner | null;
  provider: ethers.providers.Web3Provider | null;
};

export const UserContext = React.createContext<IUserContext>({
  account: null,
  balance: 0,
  connectWallet: () => undefined,
  disconnectWallet: () => undefined,
  mobileWalletConnect: null,
  assets: [],
  loading: false,
  signer: null,
  provider: null,
});

export const UserProvider: React.FC = ({ children }) => {
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(
    null
  );
  const [assets, setAssets] = useState<IAssetData[] | null>(null);
  const [accounts, setAccounts] = useState<string[] | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState<number | null>(null);
  const [walletConnector, setWalletConnector] = useState<WalletConnect | null>(
    null
  );

  const resetApp = () => {
    setAddress(null);
    setBalance(null);
    setAssets(null);
    setChainId(null);
    setAccounts(null);
    setConnected(false);
    setWalletConnector(null);
  };

  const requestPermissions = async () => {
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
  };

  const disconnectWallet = () => {
    setAddress(null);
    setBalance(0);
  };

  const connectWallet = async () => {
    try {
      // @ts-ignore
      window.ethereum
        .enable()
        .then(setProvider(new ethers.providers.Web3Provider(window.ethereum)));

      setSigner(provider.getSigner());

      await requestPermissions();
      await getAccount();
      await getBalance();
    } catch (err) {
      window.alert("You need to allow MetaMask.");
    }
  };

  const getAccount = async () => {
    // @ts-ignore
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAddress(accounts[0]);
    return await getBalance();
  };

  const getBalance = async () => {
    if (address) {
      let balance = await provider.getBalance(address);
      setBalance(parseInt(ethers.utils.formatEther(balance)));
    }
  };

  const walletConnect = new WalletConnectActions(
    setWalletConnector,
    setConnected,
    setChainId,
    setAccounts,
    setAddress,
    setLoading,
    setAssets,
    resetApp
  );

  // provider.on("accountsChanged", getAccount);

  return (
    <UserContext.Provider
      value={{
        account: address,
        balance,
        connectWallet,
        disconnectWallet,
        mobileWalletConnect: walletConnect,
        assets,
        loading,
        signer,
        provider,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContext.displayName = "UserContext";
export const User = UserContext.Consumer;
export default User;
