import { useContext, useEffect, useState } from "react";
import axios from "axios";
//
import { baseURL } from "../helper/url";
import { Context } from "../context/ContextProvider";

function UserPage() {
  const { userIDContext } = useContext(Context);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getUserProducts = async () => {
      const response = await axios.get(
        `${baseURL}/posts/author/${userIDContext}`
      );
      setData(response.data.posts);
    };
    getUserProducts();
  }, []);
  return (
    <>
      <header>
        <h1>Página do Usuário</h1>
      </header>
      <main>
        {data.length > 0 && data.map(item=>{
          return(
            <div className="product">
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          )
        })}
      </main>
    </>
  );
}

export { UserPage };
