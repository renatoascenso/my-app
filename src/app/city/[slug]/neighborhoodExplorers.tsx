import MetroExplorer from "./neighborhoods/MetroExplorer";
import StGallenExplorer from "./neighborhoods/StGallenExplorer";
import CopenhagenExplorer from "./neighborhoods/CopenhagenExplorer";
import ZurichExplorer from "./neighborhoods/ZurichExplorer";
import BerlinExplorer from "./neighborhoods/BerlinExplorer";
import MunichExplorer from "./neighborhoods/MunichExplorer";
import ParisExplorer from "./neighborhoods/ParisExplorer";
import LyonExplorer from "./neighborhoods/LyonExplorer";
import PortoExplorer from "./neighborhoods/PortoExplorer";
import BernExplorer from "./neighborhoods/BernExplorer";
import GenevaExplorer from "./neighborhoods/GenevaExplorer";

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
  geneva: {
    heading: "Explore Geneva's sectors",
    subtitle:
      "Compare the City of Geneva's 16 official statistical sectors by room prices, safety, and commute time to Uni Mail before comparing listings.",
  },
  bern: {
    heading: "Explore Bern's districts",
    subtitle:
      "Compare Bern's 32 official statistical districts across its 6 Stadtteile by room prices, safety, and commute time to the University of Bern before comparing listings.",
  },
  porto: {
    heading: "Explore Porto's parishes",
    subtitle:
      "Compare Porto's 7 official parishes by room prices, safety, and commute time to the University of Porto's campuses before comparing listings.",
  },
  paris: {
    heading: "Explore Paris's arrondissements",
    subtitle:
      "Compare the 20 arrondissements of Paris by room prices, safety, and commute time to the Latin Quarter before comparing listings.",
  },
  lyon: {
    heading: "Explore Lyon's arrondissements",
    subtitle:
      "Compare Lyon's 9 arrondissements by room prices, safety, and commute time to the universities on the Rhône before comparing listings.",
  },
  berlin: {
    heading: "Explore Berlin's boroughs",
    subtitle:
      "Compare Berlin's 12 boroughs (Bezirke) by WG prices, safety, and commute time to HU, FU and TU before comparing listings.",
  },
  munich: {
    heading: "Explore Munich's city districts",
    subtitle:
      "Compare Munich's 25 city districts (Stadtbezirke) by WG prices, safety, and commute time to LMU and TUM before comparing listings.",
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
  berlin: () => <BerlinExplorer />,
  munich: () => <MunichExplorer />,
  paris: () => <ParisExplorer />,
  lyon: () => <LyonExplorer />,
  porto: () => <PortoExplorer />,
  bern: () => <BernExplorer />,
  geneva: () => <GenevaExplorer />,
  copenhagen: () => <CopenhagenExplorer />,
};
