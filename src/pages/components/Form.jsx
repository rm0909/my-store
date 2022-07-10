function Form(props) {
  return (
    <fieldset>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="titleInput">
          Title
          <input
            onChange={props.onChangeTitle}
            id="titleInput"
            type="text"
            required
          />
        </label>
        <label htmlFor="descInput">
          Description
          <textarea
            onChange={props.onChangeDesc}
            id="descInput"
            placeholder="give us more details"
            required
          ></textarea>
        </label>
        <label htmlFor="priceInput">
          {" "}
          Price
          <input
            onChange={props.onChangePrice}
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
          Quantity
          <input
            onChange={props.onChangeQuantity}
            id="quantityInput"
            type="number"
            required
            min="1"
            max="999"
          />
        </label>
        <label htmlFor="fileInput">
          Image
          <input
            id="fileInput"
            onChange={props.onChangeImage}
            type="file"
            required
            accept="image/png, image/jpeg, image/jpg, image/jfif"
          />
        </label>
        <img
          src={props.image}
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        />
        <button type="submit">{props.button}</button>
      </form>
    </fieldset>
  );
}

export {Form}