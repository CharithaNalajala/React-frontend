import {
    Box, Button, Card, CardBody, FormControl,
    FormHelperText,
    FormLabel,
    Input, VStack
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const SignUp = () => {

    const [gmail, setGmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [register, setRegister] = useState()

    const Submit = async () => {
        await axios.post("http://localhost:9000/signup",{gmail,password,phone,register})
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                console.log(res?.data?.values)
                alert("login sucessfully")
            } else {
                alert("user not found")
                window.location.href="/signup"
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

                        <FormControl id="registernumber">
                            <FormLabel>Register Number</FormLabel>
                            <Input type="text" focusBorderColor="teal.500" onChange={(e) => setRegister(e.target.value)} />
                        </FormControl>

                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" focusBorderColor="teal.500" onChange={(e) => setGmail(e.target.value)} />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" focusBorderColor="teal.500" onChange={(e) => setPassword(e.target.value)} />
                            <FormHelperText>We'll never share your password.</FormHelperText>
                        </FormControl>

                        <FormControl id="number">
                            <FormLabel>Phone number</FormLabel>
                            <Input type="number" focusBorderColor="teal.500" onChange={(e) => setPhone(e.target.value)} />
                        </FormControl>

                        <Button colorScheme="teal" size="lg" mt={4} onClick={Submit}>Sign Up</Button>
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    )
}