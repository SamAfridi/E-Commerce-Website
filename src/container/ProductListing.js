import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../Redux/Action/ProductActions";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {
 
  const products = useSelector((state) => state);
  console.log("listing---",products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log("Err", err);
      });
     dispatch(setProducts(response.data));
     console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  },[]);
  console.log("Products .......... :", products);
  return (
      <div className="ui grid container">
         <ProductComponent />
      </div>
        
      
      
 
  );
};
export default ProductListing;
