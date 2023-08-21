import { DataHeader } from "@/dummy";
import type { SectionName } from "@/utils/types/types";
import React, { useState, createContext, useContext } from "react";

type IProps = {
  children: React.ReactNode;
};

type ActiveSectionContextProviderProps = {
  active: SectionName;
  setActive: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveContext =
  createContext<ActiveSectionContextProviderProps | null>(null);

export default function ActiveSectionContext(props: IProps) {
  const { children } = props;
  const [active, setActive] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveContext.Provider
      value={{
        active,
        setActive,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveContext);

  if (context === null) {
    throw new Error("useActiveSectionContext");
  }
  return context;
}
