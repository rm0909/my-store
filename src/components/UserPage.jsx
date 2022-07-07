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
        <section>
          <fieldset>
            <label>
              Título
              <input type="text" required />
            </label>
            <label>
              Descrição
              <textarea placeholder="give us more details"></textarea>
            </label>
            <label > Preço
              <input type="number" min="0.00" max="10000.00" step="0.01" />
            </label>
            <label >Imagem
              <input type="file" accept="image/png, image/jpeg" />
            </label>
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
