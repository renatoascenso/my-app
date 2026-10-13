import MetroExplorer from "./neighborhoods/MetroExplorer";
import StGallenExplorer from "./neighborhoods/StGallenExplorer";
import CopenhagenExplorer from "./neighborhoods/CopenhagenExplorer";
import ZurichExplorer from "./neighborhoods/ZurichExplorer";

export const neighborhoodExplorerCopy: Record<string, { heading: string; subtitle: string }> = {
  lisbon: {
    heading: "Explore the Lisbon Metropolitan Area",
    subtitle:
      "Drill down from the metro area, into Lisbon's freguesias, and preview bairros before comparing listings.",
  },
  "st-gallen": {
    heading: "Explore St.Gallen's quarters",
    subtitle:
      "Compare St.Gallen's 31 official statistical quarters by rent, safety, and commute time to HSG before comparing listings.",
  },
  zurich: {
    heading: "Explore Zurich's districts and quarters",
    subtitle:
      "Compare Zurich's 34 official statistical quarters across its 12 districts (Kreise) by room prices, safety, and commute time to ETH and UZH before comparing listings.",
  },
  copenhagen: {
    heading: "Explore Copenhagen's districts",
    subtitle:
      "Compare Copenhagen's bydele plus Frederiksberg — home to the CBS campus — by rent, safety, and commute time to CBS before comparing listings.",
  },
};

export const neighborhoodExplorersBySlug: Record<string, () => React.ReactNode> = {
  lisbon: () => <MetroExplorer />,
  "st-gallen": () => <StGallenExplorer />,
  zurich: () => <ZurichExplorer />,
  copenhagen: () => <CopenhagenExplorer />,
};
