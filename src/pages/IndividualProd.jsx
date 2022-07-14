import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
/*local components */
import { Context } from "../context/ContextProvider";
import { baseURL } from "../helper/url";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
function IndividualProd() {
  const { cartContext, pushItemToCart } = useContext(Context);

  const [data, setData] = useState({});
  
  useEffect(() => {
    const getProductByItemId = async () => {
      try {
        // if (!itemID) return;
        const itemID = JSON.parse(localStorage.getItem("currentItem"));
        const response = await axios.get(`${baseURL}/posts/product/${itemID}`);
        setData(response.data);
      } catch (error) {
        console.error({ error: error });
      }
    };
    getProductByItemId();
  }, []);
  const handleCart = (title, desc, quant, price, img, id) => {
    if (!id) return
    if (cartContext.some((item) => item._id === id)) return;
    const object = [
      {
        title: title,
        description: desc,
        quantity: quant,
        price: price,
        image: img,
        _id: id,
      },
    ];
    pushItemToCart(object);
  };
  return (
    <Container className="container">
      <main>
        <Row sm={4}>
          {data && (
            <Col>
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
            </Col>
          )}
          <Col md={8}>
            <h4>Cart</h4>
            <Row>
              <Cart cartItems={cartContext} />
            </Row>
          </Col>
        </Row>
      </main>
    </Container>
  );
}
export { IndividualProd };
