import React, { ReactNode } from "react";
import { View } from "react-native";

const AppBar = ({ children }: { children: ReactNode }) => {
  return <View className="pt-5 pb-3 bg-slate-500">{children}</View>;
};

export default AppBar;
