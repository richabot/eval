import { Stack,Image, Text, Tag, TagLabel, Heading, Box, GridItem } from "@chakra-ui/react";
import React from "react";

const Product = ({data}) => {
 
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  // return (
  //   <Stack data-cy="product">
  //     <Image data-cy="product-image" />{data.image}
  //     <Text data-cy="product-category"></Text>
  //     <Tag>
  //       <TagLabel data-cy="product-gender"></TagLabel>
  //     </Tag>
  //     <Heading data-cy="product-title"></Heading>
  //     <Box data-cy="product-price"></Box>
  //   </Stack>
  // );


  return(
    data.map((el)=>{
     
      return (
        
        <>
     <div key={el.id}></div>
        <GridItem> 
         <Stack data-cy="product">
  
     <Image data-cy="product-image" src={el.imageSrc} />
     <Text data-cy="product-category">{el.category}</Text>
     <Tag>
       <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
     </Tag>
     <Heading data-cy="product-title">{el.title}</Heading>
     <Box data-cy="product-price">{el.price}</Box>
   </Stack>
   </GridItem> 
    
</>
    );
      
    })
  )
};

export default Product;
