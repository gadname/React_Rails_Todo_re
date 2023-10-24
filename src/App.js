import React, { useState, useEffect } from "react";
import Task from './component/Task';
import { Center, Box, CheckboxGroup, Text } from "@chakra-ui/react";



const App = () => {
  return (
    <Box mt="64px">
      <Center>
        <Box>
        <Box mb="24px">
          <Text fontSize="24px" fontWeight="bold">
    タスク一覧
    </Text>
    </Box>
          <CheckboxGroup>
    <Task name="買い物" /> 
    <Task name="ランニング" />
    <Task name="プログラミングの基礎" />
    </CheckboxGroup>
        </Box>
      </Center>
    </Box>
  );
}

export default App;
