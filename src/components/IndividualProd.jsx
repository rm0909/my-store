import { useContext, useEffect, useState } from "react";
import axios from "axios";
/*local components */
import { Context } from "../context/ContextProvider";
import { baseURL } from "../helper/url";
import {Product} from "./Product"
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

  return (
    <>
      <header>
        <h1>PRODUTO</h1>
      </header>
      <main>
        {data && <>
          <Product
                id={data._id}
                title={data.title}
                desc={data.description}
                price={data.price}
              />
            <button>Adicionar ao carrinho</button>
          </>}
      </main>
      
    </>
  );
}
export { IndividualProd };
