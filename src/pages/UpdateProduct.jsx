import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';



const UpdateProduct = () => {
  const { state: product } = useLocation()
  const [formData, setFormData] = useState(product);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_URL;
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/${product.id}/`, formData);
      
    } catch (err) {
      console.log(err);
    }
    navigate(-1);
  };

  return (
    <div className="container">
      <ProductForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={ formData }
        text = 'Update'
      />
    </div>
  );
}

export default UpdateProduct