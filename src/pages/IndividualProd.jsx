import { useContext, useEffect, useState } from "react";
import axios from "axios";
/*local components */
import { Context } from "../context/ContextProvider";
import { baseURL } from "../helper/url";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
function IndividualProd() {
  const { itemID } = useContext(Context);

  const [data, setData] = useState({});
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getProductByItemId = async () => {
      try {
        if (!itemID) return;
        const response = await axios.get(`${baseURL}/posts/product/${itemID}`);
        setData(response.data);
      } catch (error) {
        console.error({ error: error });
      }
    };
    getProductByItemId();
  }, []);
  const handleCart = (title,desc,quant,price,img,id) => {
    if (cart.some(item=> item.id === id)) return 
    const object = [{
      title: title,
      description: desc,
      quantity: quant,
      price: price,
      image:img,
      _id: id,
    }]
    setCart(prev=> [...prev,object])
  };
  return (
    <>
      <header>
        <h1>PRODUTO</h1>
      </header>
      <main>
        {data && (
          <>
            <Product
              handleCart={handleCart}
              id={data._id}
              title={data.title}
              desc={data.description}
              price={data.price}
              quant={data.quantity}
              image={data.image}
              author={data.author}
            />
          </>
        )}
      </main>
      <Cart cartItems={cart} />
    </>
  );
}
export { IndividualProd };
