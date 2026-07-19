import MetroExplorer from "./neighborhoods/MetroExplorer";
import StGallenExplorer from "./neighborhoods/StGallenExplorer";
import CopenhagenExplorer from "./neighborhoods/CopenhagenExplorer";

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
  copenhagen: {
    heading: "Explore Copenhagen's districts",
    subtitle:
      "Compare Copenhagen's bydele plus Frederiksberg — home to the CBS campus — by rent, safety, and commute time to CBS before comparing listings.",
  },
};

export const neighborhoodExplorersBySlug: Record<string, () => React.ReactNode> = {
  lisbon: () => <MetroExplorer />,
  "st-gallen": () => <StGallenExplorer />,
  copenhagen: () => <CopenhagenExplorer />,
};
