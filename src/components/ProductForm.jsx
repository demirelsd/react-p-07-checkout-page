import { useState } from "react";

const ProductForm = ({handleChange, handleSubmit, formData, text}) => {
  
  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="text-center">{`${text} Product `}</h1>
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="add-name"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="add-price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="add-quantity"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="add-image"
            aria-describedby="basic-addon3"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2" />
            {`Save To ${text} Product`}
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
