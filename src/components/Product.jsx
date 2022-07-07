function Product(props){
    return(
        <div
        onClick={props.handleClick}
        className="product"
        key={props.id}
      >
        <p>title:{props.title}</p>
        <p>desc:{props.desc}</p>
        <p>preço: {props.price}</p>
      </div>
    )
}
export {Product}