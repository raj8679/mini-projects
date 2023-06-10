import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import SelectOpt from "./SelectOpt";


const Dashboard = () => {
  return (
    <>
      <Box border={"1px solid teal"} m='auto' w={'70%'}>
        <Flex >
            <SelectOpt name={'sort by age'} options={['ascending','descending']}/>
        </Flex>
      </Box>
     
      
     
    </>
  );
};
export default Dashboard;
