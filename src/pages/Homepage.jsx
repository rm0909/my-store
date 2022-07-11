import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
/*local components*/
import { Context } from "../context/ContextProvider";
import { baseURL } from "../helper/url";
import { ProductReadOnly } from "./components/ProductReadOnly";
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
        alert.log("Error when loading products", e);
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
    <Container fluid>
      <header>
        <h1 className="text-align">home</h1>
      </header>
      <main>
        <Container xl={3}>
          <Row>
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <Col>
                    <ProductReadOnly
                      handleClick={() => handleClick(item._id)}
                      key={item._id}
                      title={item.title}
                      desc={item.description}
                      quant={item.quantity}
                      price={item.price}
                      image={item.image}
                      author={item.author}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </main>
    </Container>
  );
}
export { Homepage };
