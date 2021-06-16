import React from "react";

import useUser from "hooks/useUser";
import UserProfilePage from "@/pages/UserProfile";
import ConnectWalletPage from "@/components/pages/UserProfile/ConnectWalletPage";

export default function UserProfile() {
  const { user } = useUser();

  return user.address ? <UserProfilePage data={user} /> : <ConnectWalletPage />;
}
