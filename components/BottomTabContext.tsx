import React, { createContext, useContext, useState, useRef } from "react";

const TabContext = createContext({
  opened: false,
  toggleOpened: () => {},
  visible: true,
  setBottomBarStatus: (status: boolean) => {},
});

export const BottomTabContextProvider = ({ children }: any) => {
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(true);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  const setBottomBarStatus = (status: boolean) => {
    setVisible(status);
  };

  return (
    <TabContext.Provider
      value={{
        opened,
        toggleOpened,
        visible,
        setBottomBarStatus,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabMenu = () => useContext(TabContext);
