
import React, {useState, useEffect} from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from 'axios'


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false)
  const BASE_URL = process.env.REACT_APP_API_URL;
 
  const getProducts = async () => {
    try {
      const { data } = await axios.get(BASE_URL)
      setProducts(data)
      setLoading(false)
      setErrorState(false)
      
      console.log(data)
    } catch (error) {
      setErrorState(true)
      setLoading(false)
      console.log(error)
    }

  }
  useEffect(() => {
     getProducts()
   }, [])
  
  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : products.length > 0 ? (
          <>
            <article id="product-panel" className="col-md-5">
             { products.map((product)=> <ProductCard key= {product.id} product = {product} getProducts= {getProducts} />)}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal products = {products} />
            </article>
          </>
        ) : (
          !errorState && <p className="text-center text-danger w-100">No products data...</p>
        )}
        {errorState && (
          <p className="text-center text-danger w-100">Something Went Wrong</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
