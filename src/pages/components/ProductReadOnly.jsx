import { Context } from "/Users/COMPUTADOR/Documents/GitHub/my-store/src/context/ContextProvider.jsx";
import { useContext } from "react";
function ProductReadOnly(props) {
  const { userIDContext } = useContext(Context);
  return (
    <div key={Date.now()} onClick={props.handleClick} className="product">
      <p>title:{props.title}</p>
      <p>desc:{props.desc}</p>
      <p>quant:{props.quant}</p>
      <p>preço: {props.price}</p>
      <img src={props.image} />
      {userIDContext === props.author && <p>It is your item</p>}
    </div>
  );
}
export { ProductReadOnly };
