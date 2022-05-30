import React from "react";
import {Flex, Grid} from "@chakra-ui/react"
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { useState,useEffect } from "react";
import axios from "axios";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  // eslint-disable-next-line
  const  [data,setData] = useState([]);
  const addData = (details) => {
    axios.post('http://localhost:8080/products', {
        ...details
    }).then(resp => {
        setData([...data,resp.data]);
     
    })
    
};
  useEffect(()=>{
    const callData = async () => {
        let res = await axios.get(`http://localhost:8080/products`)
        setData(res.data)
       
        // setcount(Number(res.headers["x-total-count"]))
        // console.log(res.data)
    }
    callData();
},[])
  return (
  <div>
    
    <Flex>
   <AddProduct  addData={addData}/>
      <Grid templateColumns='repeat(5,1fr) ' gap={6}>
       
       
        <Product data={data}  />
       

      </Grid>
    <Pagination/>
    </Flex>
  </div>
  );
};

export default Products;
