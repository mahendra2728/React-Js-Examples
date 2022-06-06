import axios from "axios";
import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductList = () =>{

    const dispatch = useDispatch()
    const fetchDataFromServer = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products")
               .catch((error)=>{
                   console.log(error)
               });
        console.log(response.data)
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchDataFromServer();
    },[])

    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );

}

export default ProductList;