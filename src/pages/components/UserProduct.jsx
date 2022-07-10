function UserProduct(props) {
  return (
    <div key={props.id} onClick={props.handleClick} className="product">
      <p>title:{props.title}</p>
      <p>desc:{props.desc}</p>
      <p>preço: {props.price}</p>
      <img src={props.image} />
      <button onClick={props.handleDelete}>excluir</button>
      <button onClick={props.handleEditState}>editar</button>
    </div>
  );
}
export { UserProduct };
