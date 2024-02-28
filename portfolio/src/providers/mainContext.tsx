"use client";

import { IChildren, IMainContext } from "@/types/types";
// import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

export const MainContext = createContext<IMainContext>({} as IMainContext);

export const MainProvider = ({ children }: IChildren) => {
  // const router = useRouter();

  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <MainContext.Provider
      value={{
        language,
        setLanguage,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

//hook
export const useMainContext = () => useContext(MainContext);