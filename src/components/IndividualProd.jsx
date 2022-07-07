import { useContext, useEffect, useState } from "react";
import axios from "axios";
/*local components */
import { Context } from "../context/ContextProvider";
import { baseURL } from "../helper/url";
import {useNavigate} from "react-router-dom"
function IndividualProd() {
  const { itemID } = useContext(Context);

  const [data, setData] = useState({});
  useEffect(() => {
    const getProductByItemId = async () => {
      try {
        if (!itemID) return
        const response = await axios.get(`${baseURL}/posts/product/${itemID}`);
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error({ error: error });
      }
    };
    getProductByItemId();
  }, []);
let navigate = useNavigate()
  return (
    <>
    <button onClick={()=> navigate("/")}>HOME</button>
      <header>
        <h1>PRODUTO</h1>
      </header>
      <main>
        {data && <div className="product">
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <button>Adicionar ao carrinho</button>
          </div>}
      </main>
      
    </>
  );
}
export { IndividualProd };
