import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
//
import { baseURL } from "../helper/url";
import { Context } from "../context/ContextProvider";
import { UserProduct } from "./components/UserProduct.jsx";
import { PostForm } from "./components/PostForm.jsx";
function UserPage() {
  const { userIDContext } = useContext(Context);
  const [data, setData] = useState([]);

  //form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [imageState, setImageState] = useState("");
  const [reRender, setRerender] = useState([]);
  const [editState, setEditState] = useState(false);
  const [itemID, setItemID] = useState("");
  useEffect(() => {
    const getUserProducts = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/posts/author/${userIDContext}`
        );
        setData(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProducts();
  }, []);

  //function to make javascript read image to desplay for the user
  const previewFiles = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImageState(reader.result);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    previewFiles(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${baseURL}/posts/post`, {
      authorID: userIDContext,
      title: title,
      description: description,
      quantity: quantity,
      price: price,
      image: imageState,
    });
    try {
      const uploadedImage = response.data;
      console.log("Image sent", uploadedImage);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/posts/product/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${baseURL}/posts/product/${itemID}`, {
        authorID: userIDContext,
        title: title,
        description: description,
        quantity: quantity,
        price: price,
        image: imageState,
      });
      console.log("patched");
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditState = (itemID) => {
    setItemID(itemID);
    setEditState((prev) => (prev === true ? false : true));
  };
  return (
    <>
      <header>
        <h1 className="text-align">User Page</h1>
      </header>
      <main>
        <Row>
          <Col>
            <section>
              <PostForm
                handleSubmit={
                  !editState ? (e) => handleSubmit(e) : (e) => handleEdit(e)
                }
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeDesc={(e) => setDescription(e.target.value)}
                onChangePrice={(e) => setPrice(Number(e.target.value))}
                onChangeQuantity={(e) => setQuantity(Number(e.target.value))}
                onChangeImage={(e) => handleChange(e)}
                image={imageState}
                button={!editState ? "Post" : "Edit"}
              />
            </section>
          </Col>
          <Col>
            <section>
              <Container fluid>
                <h4 className="text-align">User Products</h4>
                <Row>
                  {data.length > 0 &&
                    data.map((item) => {
                      return (
                        <Col>
                          <UserProduct
                            title={item.title}
                            desc={item.description}
                            price={item.price}
                            image={item.image}
                            id={item._id}
                            handleDelete={() => handleDelete(item._id)}
                            handleEditState={() => handleEditState(item._id)}
                          />
                        </Col>
                      );
                    })}{" "}
               </Row>
              </Container>
            </section>
          </Col>
        </Row>
      </main>
    </>
  );
}

export { UserPage };
