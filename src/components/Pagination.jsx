import { ButtonGroup,Button,Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({page,setpage,totalcount}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;


  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button"></Button>
      <Button data-cy="pagination-previous-button" 
      disabled={page<=1}
      onClick={()=>setpage(page-1)}
      >{"<"}</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3"></option>
        <option data-cy="pagination-limit-6"></option>
        <option data-cy="pagination-limit-9"></option>
      </Select>
      <Button data-cy="pagination-next-button" 
      disabled={totalcount<page*5}
      onClick={()=>setpage(page+1)}>{">"}</Button>
      <Button data-cy="pagination-last-button"></Button>
    </ButtonGroup>
  );
};

export default Pagination;
