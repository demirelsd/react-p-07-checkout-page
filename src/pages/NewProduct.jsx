import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import { useNavigate} from "react-router-dom"
const initalState = {
  name: '', image: '', price: 0, dampingRate: 0.8, amount: 1
}
const NewProduct = () => {
  const [formData, setFormData] = useState(initalState);
  const navigate = useNavigate()
  const BASE_URL = process.env.REACT_APP_API_URL;
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]:e.target.value});
  const handleSubmit = async(e) => {
    e.preventDefault()    
    try {
      await axios.post(BASE_URL, formData);
      setFormData(initalState)
    } catch (err) {
      console.log(err);
    }
    navigate('/product-list')
     };

  return (
    <div className='container'>
      <ProductForm handleSubmit={handleSubmit } handleChange={handleChange} formData={formData} text='New' />
    </div>
  );
}

export default NewProduct