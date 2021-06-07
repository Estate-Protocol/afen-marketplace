export interface Art {
  title: string;
  creation: Date | string;
  auction?: boolean;
  bids?:
    | {
        amount: number;
        currency: number;
        creation: number;
        by: string;
      }[]
    | null;
}
