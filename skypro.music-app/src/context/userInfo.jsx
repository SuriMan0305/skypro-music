import React, { useContext } from "react";

export const UserContext = React.createContext(null)

export const useUserContext = () => {
  const infoUser = useContext(UserContext);
  if (!infoUser) {
    return;
  }
  return infoUser
}