export interface ListGridItem {
  id: string;
  name: string;
  verified?: string;
  description?: string;
  hightestBid?: number;
  governmentAuthority?: string;
  price: number;
  auction: boolean;
  expires: string;
  created?: Date | string;
  royalty?: number;
  likes?: number;
  image: {
    src: string;
    alt: string;
  };
  owner: {
    name: string;
    profileImage?: string;
  };
  bids?: {
    name: string;
    bidAmount: number;
  }[];
}
