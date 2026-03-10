import { useState, useEffect } from "react";
import * as Network from "expo-network";

const useNetworkStatus = (): boolean | undefined => {
  const [isNetwork, setNetwork] = useState<boolean | undefined>(undefined);

  const onNetworkHandler = async () => {
    const status = await Network.getNetworkStateAsync();
    setNetwork(status.isConnected);
  };

  useEffect(() => {
    onNetworkHandler();
  }, []);

  return isNetwork;
};

export default useNetworkStatus;
