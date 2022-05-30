import React from "react";
import {Flex, Grid} from "@chakra-ui/react"
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { useState,useEffect } from "react";
import axios from "axios";
const Products = () => {
  const [page, setpage] = useState(1);
  const [totalcount,settotalcount]=useState(0)
  console.log(page)
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  // eslint-disable-next-line
  const  [data,setData] = useState([]);
  const addData = (details) => {
    console.log(details)
    axios.post('http://localhost:8080/products', {
        ...details
    }).then(resp => {
        setData([...data,resp.data]);
     console.log(data,"kkdfkld")
    })
    
};
  useEffect(()=>{
    const callData = async () => {
        let res = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=5`)
        setData(res.data)
       
        settotalcount(Number(res.headers["x-total-count"]))
        // console.log(res.data)
    }
    callData();
},[page])
  return (
  <div>
    
    <Flex>
   <AddProduct addData={addData} data={data} />
      <Grid templateColumns='repeat(5,1fr) ' gap={6}>
       
       
        <Product data={data}  />
       

      </Grid>
    <Pagination page={page} setpage={setpage} settotalcount={settotalcount} totalcount={totalcount} />
    </Flex>
  </div>
  );
};

export default Products;
