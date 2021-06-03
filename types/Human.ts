export default interface Human {
  firstName?: string;
  lastName?: string;
  walletAddress: string;
  balances?: number[];
  image?: string;
  creation?: string;
}
