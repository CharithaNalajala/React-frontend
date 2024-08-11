import { 
  Card, 
  CardBody, 
  FormControl, 
  FormHelperText, 
  FormLabel, 
  Input, 
  Button, 
  VStack, 
  Box 
} from "@chakra-ui/react";
import axios from 'axios'

import { useState } from "react";

export const SignIn = () => {
  const [gmail,setName]=useState()
  const [password,setPassword]=useState()

  const signin=async()=>{
      await axios.post("http://localhost:9000/signin",{gmail,password})
      .then((res)=>{console.log(res)
          if(res.data.status==="fail"){
              alert(res.data.message)
              
              
          } else {
              alert(res.data.message)
              // window.location.href="/signup"
          }
      })
      .catch((e)=>console.log(e))
  }

  return (
      <Box 
          height="100vh" 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          bg="gray.50"
      >
          <Card 
              width="400px" 
              boxShadow="lg" 
              p={6} 
              borderRadius="md"
          >
              <CardBody>
                  <VStack spacing={4} align="stretch">
                      <FormControl id="email">
                          <FormLabel>Email address</FormLabel>
                          <Input type="email" focusBorderColor="teal.500" onChange={(e)=>setName(e.target.value)} />
                          <FormHelperText>We'll never share your email.</FormHelperText>
                      </FormControl>

                      <FormControl id="password">
                          <FormLabel>Password</FormLabel>
                          <Input type="password" focusBorderColor="teal.500" onChange={(e)=>setPassword(e.target.value)}/>
                          <FormHelperText>We'll never share your password.</FormHelperText>
                      </FormControl>

                      <Button colorScheme="teal" size="lg" mt={4} onClick={signin}>Sign In</Button>
                  </VStack>
              </CardBody>
          </Card>
      </Box>
  );
};