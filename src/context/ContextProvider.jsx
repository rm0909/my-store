import { createContext, useEffect, useState } from "react";
const Context = createContext();

function ContextProvider({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [itemID, setItemID] = useState("");
  const [userIDContext, setUserIDContext] = useState("");
  useEffect(() => {
    checkAuth();
  }, [authorized]);
  function checkAuth() {
    const data = JSON.parse(localStorage.getItem("storeUserData"));
    if (!data) return;
    setUserIDContext(data.userID);
  }
  const setAuth = () => setAuthorized(true);
  const handleItemIDContext = (id) => setItemID(id);
  return (
    <Context.Provider
      value={{
        authorized,
        setAuth,
        handleItemIDContext,
        itemID,
        userIDContext,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
