import { createContext, useContext } from "react";

export interface PrefsContextState {
    veganOnly: boolean,
}

export interface PrefsContextInterface extends PrefsContextState {
  setVeganOnly: (value: boolean) => void;
}

export const PrefsContext = createContext<PrefsContextInterface | PrefsContextState>(
  {veganOnly: true}
);

export const usePrefs = () => useContext(PrefsContext);