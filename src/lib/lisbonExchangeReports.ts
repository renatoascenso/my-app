import type { ExchangeReportsData } from "./exchangeReports";

export const lisbonExchangeReports: ExchangeReportsData = {
  cityLabel: "Lisbon",
  universities: [
    { id: "all", name: "All universities" },
    { id: "iscte", name: "ISCTE Business School / IUL" },
    { id: "nova", name: "NOVA School of Business and Economics" },
    { id: "catolica", name: "Católica Lisbon (CLSBE)" },
  ],
  questions: [
    {
      id: "neighborhoods",
      question: "Which neighborhoods do past exchange students recommend for housing?",
    },
    {
      id: "budget",
      question: "How much should I budget for rent per month?",
    },
    {
      id: "booking",
      question: "What's the safest way to find and book a room, and what should I watch out for?",
    },
  ],
  answers: {
    all: {
      neighborhoods:
        "Across all 11 reports, the most recommended areas are Príncipe Real, Santos, Alfama/Baixa, and — for ISCTE and Católica students specifically — Saldanha or Marquês de Pombal. Almost every single report, regardless of university, warns against actually living in Bairro Alto: great to visit, too loud to sleep in.",
      budget:
        "Expect roughly €500–1,000/month for a room, depending on location and how many flatmates you have. Students heading to NOVA SBE (whose campus is out in Carcavelos) sometimes pay less by living near campus instead of downtown Lisbon.",
      booking:
        "Book through Uniplaces or Spotahome rather than informal Facebook listings — fake listings and vanishing deposits come up across nearly every report. Multiple students also stress starting the search months in advance, since Lisbon's rental market is described as tight and competitive by almost everyone.",
    },
    iscte: {
      neighborhoods:
        "ISCTE students recommend Príncipe Real, Intendente, Lapa, Santos, Estrela, Marquês de Pombal, Saldanha, São Bento, and Anjos — all close to a metro line with a reasonably short ride to campus. Nearly everyone explicitly warns against Bairro Alto itself.",
      budget:
        "€500–800/month is typical for a room in a shared flat. One report mentions paying €1,500/month for a full 2-room apartment in a prime, very central location.",
      booking:
        "Book through Uniplaces or Spotahome, not Facebook — scams are called out specifically. One student also warned against booking through 'VIV-housing' (a landlord/agency operating across several platforms) due to poor service and being overcharged.",
    },
    nova: {
      neighborhoods:
        "Since NOVA SBE's campus is in Carcavelos, outside the city center, students split between living near campus (Carcavelos/Parede — beach access, ~30min train into town) or in central Lisbon (Santos, Príncipe Real, near Praça do Comércio — longer commute, more nightlife). Santos comes up repeatedly as the best compromise between the two.",
      budget:
        "Budget roughly €500–1,000/month. Reports mention paying €600–800 for a room in the city center, and less for shared housing further out near campus (e.g. a shared house in Parede).",
      booking:
        "Uniplaces and Spotahome both offer deposit protection (funds released to the landlord ~24h after check-in), which reports flag as valuable if you can't visit in person first. Also worth checking Instagram accounts like 'flatsforfriendz,' where past exchange students hand off their rooms directly to incoming ones.",
    },
    catolica: {
      neighborhoods:
        "Católica students consistently recommend Príncipe Real, Santos, Baixa, and Alfama. Bairro Alto's surrounding streets are fine, but not Bairro Alto itself — too noisy at night. One report also flagged Martim Moniz as worth avoiding after dark.",
      budget:
        "€500–1,000/month depending on how central and how shared the flat is: €600–700 for a room in a 5–7 person flat, €800–1,000 for a more central spot shared with only 1–2 others.",
      booking:
        "Uniplaces is the most-used platform across Católica reports specifically. As with the other schools, informal listings (Facebook, WhatsApp) come with real scam risk, and starting the search 4–6 months ahead is recommended.",
    },
  },
  sources: [
    { author: "Darius Rosenkranz", universityId: "iscte", university: "ISCTE Business School", semester: "Spring 2022" },
    { author: "Laura Giacometti & Hannah Schläfli", universityId: "iscte", university: "ISCTE-IUL", semester: "Autumn 2022" },
    { author: "Emmanuelle Reymond", universityId: "iscte", university: "ISCTE-IUL", semester: "Autumn 2023" },
    { author: "Vitus Horneffer", universityId: "nova", university: "NOVA SBE", semester: "Autumn 2024" },
    { author: "Ivo Graf, Raphael Zurfluh, Paulina Dubey, Sarina Weibel & Janina Moser", universityId: "nova", university: "NOVA SBE", semester: "Spring 2025" },
    { author: "Laurin Engels & Luana Abplanalp", universityId: "nova", university: "NOVA SBE", semester: "Autumn 2024" },
    { author: "Lisa Yerebakan", universityId: "nova", university: "Universidade Nova de Lisboa", semester: "Autumn (~2016)" },
    { author: "Franziska Mlekusch & Reyhan Kirca", universityId: "catolica", university: "Católica Lisbon", semester: "Autumn 2023" },
    { author: "(name withheld) Vortmeyer", universityId: "catolica", university: "Católica Lisbon", semester: "~2020/2021" },
    { author: "Mathias Altermatt", universityId: "catolica", university: "Católica Lisbon", semester: "Spring 2025" },
    { author: "Marlene Silz", universityId: "catolica", university: "Católica Lisbon", semester: "Autumn 2024" },
  ],
};
