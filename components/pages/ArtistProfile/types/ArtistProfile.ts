import { Art } from "@/pages/token/types/Art";
import { UserProfile } from "@/pages/User/types/User";

export interface ArtistProfile extends UserProfile {
  collections: Art[] | null;
  sold: Art[] | null;
}
