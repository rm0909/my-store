import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/*local components*/
import { Context } from "../context/ContextProvider";
import { baseURL } from "../helper/url";
import { Product } from "./Product";
import axios from "axios";

function Homepage() {
  const [data, setData] = useState([]);
  const { handleItemIDContext } = useContext(Context);

  useEffect(() => {
    const getRequest = async () => {
      try {
        const response = await axios.get(`${baseURL}/posts`);
        setData(response.data.products);
      } catch (e) {
        alert.log("Erro ao carregar produtos", e);
      }
    };
    getRequest();
  }, []);
  let navigate = useNavigate();
  const handleClick = (id) => {
    handleItemIDContext(id);
    navigate("/product", { replace: true });
  };

  return (
    <>
      <header>
        <h1>home</h1>
      </header>
      <main>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <Product
                handleClick={()=> handleClick(item._id)}
                id={item._id}
                title={item.title}
                desc={item.description}
                price={item.price}
              />
              // <div
              //   onClick={() => handleClick(item._id)}
              //   className="product"
              //   key={item._id}
              // >
              //   <p>title:{item.title}</p>
              //   <p>desc:{item.description}</p>
              //   <p>preço: {item.price}</p>
              // </div>
            );
          })}
      </main>
    </>
  );
}
export { Homepage };
