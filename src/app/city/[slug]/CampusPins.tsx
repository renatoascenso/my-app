"use client";

import { createContext, useContext } from "react";

/** A university campus drawn on the neighbourhood map. */
export type CampusPin = { id: string; lat: number; lng: number; label: string; title: string };

/** Fired when a student clicks "Show on map"; the neighbourhood map listens for it. */
export const FOCUS_CAMPUS_EVENT = "housingatlas:focus-campus";
export type FocusCampusDetail = { lat: number; lng: number; label: string };

const CampusPinsContext = createContext<CampusPin[]>([]);

/** Makes a city's campuses available to whichever neighbourhood map the city uses. */
export function CampusPinsProvider({ pins, children }: { pins: CampusPin[]; children: React.ReactNode }) {
  return <CampusPinsContext.Provider value={pins}>{children}</CampusPinsContext.Provider>;
}

export const useCampusPins = () => useContext(CampusPinsContext);
