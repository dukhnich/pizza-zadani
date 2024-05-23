import { createContext, useContext } from "react";

export interface PrefsContextState {
    veganOnly: boolean,
}

export const PrefsContextStateInitial = (): PrefsContextState => ({
    veganOnly: true,
})

export interface PrefsContextInterface extends PrefsContextState {
  setVeganOnly: (value: boolean) => void;
}

export const PrefsContext = createContext<PrefsContextInterface>({
  ...PrefsContextStateInitial(),
  setVeganOnly: () => {},
});

export const usePrefs = () => useContext(PrefsContext);