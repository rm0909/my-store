function Product(props){
    return(
        <div
        onClick={props.handleClick}
        className="product"
        key={props.key}
      >
        <p>title:{props.title}</p>
        <p>desc:{props.desc}</p>
        <p>preço: {props.price}</p>
        <img src={props.image} />
      </div>
    )
}
export {Product}