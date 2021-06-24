export interface UserProfile {
  walletAddress: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  instagram?: SocialLink;
  twitter?: SocialLink;
  portfolio?: string;
  description?: string;
  verified?: boolean;
  profileImage?: string;
  bannerImage?: string;
}

export interface SocialLink {
  url: string;
  handle: string;
}
