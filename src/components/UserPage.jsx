import { useContext, useEffect, useState } from "react";
import axios from "axios";
//
import { baseURL } from "../helper/url";
import { Context } from "../context/ContextProvider";

function UserPage() {
  const { userIDContext } = useContext(Context);
  const [data, setData] = useState([]);

  
  //form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [imageState, setImageState] = useState("");

  useEffect(() => {
    const getUserProducts = async () => {
      const response = await axios.get(
        `${baseURL}/posts/author/${userIDContext}`
      );
      setData(response.data.posts);
    };
    getUserProducts();
  }, []);
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
    const response = await axios.post("http://localhost:8000/posts/post", {
      authorID: "62bded7e0bef451bc3892950",
      title: title,
      description: description,
      quantity: quantity,
      price: price,
      image: imageState,
    });
    try {
      const uploadedImage = response.data;
      console.log({ uploadedImage: uploadedImage });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header>
        <h1>Página do Usuário</h1>
      </header>
      <main>
        <section>
          <fieldset>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="titleInput">
                Título
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  id="titleInput"
                  type="text"
                  required
                />
              </label>
              <label htmlFor="descInput">
                Descrição
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  id="descInput"
                  placeholder="give us more details"
                  required
                ></textarea>
              </label>
              <label htmlFor="priceInput">
                {" "}
                Preço
                <input
                  onChange={(e) => setPrice(Number(e.target.value))}
                  id="priceInput"
                  type="number"
                  required
                  min="0.00"
                  max="10000.00"
                  step="0.01"
                />
                
              </label>
              <label htmlFor="quantityInput">
                {" "}
                Quantidade
                <input
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  id="quantityInput"
                  type="number"
                  required
                  min="1"
                  max="999"
                  
                />
                
              </label>
              <label htmlFor="fileInput">
                Imagem
                <input
                  id="fileInput"
                  onChange={(e) => handleChange(e)}
                  type="file"
                  required
                  accept="image/png, image/jpeg, image/jpg, image/jfif"
                />
              </label>
              <img
                src={imageState}
                style={{ maxWidth: "150px", maxHeight: "150px" }}
              />
              <button type="submit">submit</button>
            </form>
          </fieldset>
        </section>
        <section>
          <h1>User Products</h1>
          {data.length > 0 &&
            data.map((item) => {
              return (
                <div className="product" key={item._id}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <img src={item.image}/>
                  <button>excluir</button>
                  <button>editar</button>
                </div>
              );
            })}{" "}
        </section>
      </main>
    </>
  );
}

export { UserPage };
