import React, { useContext } from "react";

export const UserContext = React.createContext(localStorage.getItem('idUser'))

export const useUserContext = () => {
  const user = useContext(UserContext);
  if (!user) {
    const error = {username: 'not found user'}
    return error
  }
  return user
}