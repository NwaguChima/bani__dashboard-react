import { useContext, useState } from "react";
import GlobalContext from "../context/globalContext";

const useAuth = () => {
  const { user, setUser } = useContext(GlobalContext);

  return { user, setUser };
};

export default useAuth;
