import TabsComponent from "@/design-system/Tab";
import React from "react";
import Bid, { BidProps } from "./TokenBids";
import TokenDetails, { TokenDetailsProps } from "./TokenDetails";
import TokenHistory, { TokenHistoryProps } from "./TokenHistory";

export interface TokenPageTabs {
  bids?: BidProps[];
  history?: TokenHistoryProps[];
  details: TokenDetailsProps;
  owners?: string[];
}

export default function TokenPageTabs({
  bids,
  history,
  details,
}: TokenPageTabs) {
  return (
    <div>
      <TabsComponent
        tabs={[
          {
            title: "About the art",
            body: <TokenDetails {...details} />,
          },
          {
            title: "Bids",
            body: bids?.map((bid) => <Bid {...bid} />),
          },
          {
            title: "History",
            body: history?.map((historyEvent) => (
              <TokenHistory {...historyEvent} />
            )),
          },
        ]}
      />
    </div>
  );
}
