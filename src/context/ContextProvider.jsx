import { createContext, useEffect, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
const Context = createContext();

function ContextProvider({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [itemID, setItemID] = useState("");
  const [userIDContext, setUserIDContext] = useState("");
  const [cartContext, setCartContext] = useState([])
  useEffect(() => {
    checkAuth();
  }, [authorized]);
 
  function checkAuth() {
    const data = JSON.parse(localStorage.getItem("storeUserData"));
    if (!data) {
      setAuthorized(false);
    }else{
      setUserIDContext(data.userID);
      setAuthorized(true)
    }
    
  }
  const setAuth = () => setAuthorized(true);
  const handleItemIDContext = (id) =>{ 
    setItemID(id)
    localStorage.setItem("currentItem", JSON.stringify(id))
  };
  const pushItemToCart = (product) => setCartContext(prev=> prev.concat(product))
  return (
    <Context.Provider
      value={{
        authorized,
        setAuth,
        handleItemIDContext,
        itemID,
        userIDContext,
        cartContext,
        pushItemToCart
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
