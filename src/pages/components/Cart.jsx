function Cart(props) {
  return (
    <div>
     {props.cartItems.map((item,index )=> {
        return (<div key={index}>
            <p>{item.name}</p>
        </div>
            
        )
     })}
    </div>
  );
}
export { Cart };
