import { Button,  Modal, ModalBody, Radio, RadioGroup, Select,Input, FormControl, FormLabel,useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";


const AddProduct = (props) => {
 
 
  const [employee,setEmployee] = useState({
  
  });
  const handleOnChange = (event) => {
    let {name, value, type, checked, files} = event.target;
    if(type==='checkbox')
    {
      setEmployee({
        ...employee,
        [name]:checked
      })
    }
    else if(type==='file')
    {
      setEmployee({
        ...employee,
        [name]:files
      })
    }
    else
    {
      setEmployee({
        ...employee,
        [name]:value
      })
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(employee);
    props.addData(employee)
    setEmployee({
      ...employee,
      "title":'',
    
    });
   
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    
      <Button  onClick={onOpen} my={4} data-cy="add-product-button">helo</Button>

      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit}  >
            <FormLabel>Title</FormLabel>
          <Input data-cy="add-product-title" 
          name="title"
          onChange={handleOnChange} />
            <FormLabel>Category</FormLabel>
          <Select data-cy="add-product-category" name="category" onChange={handleOnChange}>
            <option data-cy="add-product-category-shirt" value="shirt">S</option>
            <option data-cy="add-product-category-pant"  value="pant">P</option>
            <option data-cy="add-product-category-jeans"  value="jeans">J</option>
          </Select>
          <FormLabel>Gender</FormLabel>
          <RadioGroup data-cy="add-product-gender" >
            <Radio data-cy="add-product-gender-male" name="gender" value="male">M</Radio>
            <Radio data-cy="add-product-gender-female" name="gender" value="female">F</Radio>
            <Radio data-cy="add-product-gender-unisex" name="gender" value="Unisex" >U</Radio>
          </RadioGroup>
          <FormLabel>price</FormLabel>
          <Input data-cy="add-product-price" name="price"
          onChange={handleOnChange} />
          <Button data-cy="add-product-submit-button" type="submit"  onClick={onClose}></Button>
          </form>
        </ModalBody>
      </Modal>
     
    </>
  );
};

export default AddProduct;
