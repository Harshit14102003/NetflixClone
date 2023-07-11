import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useContext, useState } from 'react';
  import { db } from '@/config/firebase';
  import { collection, addDoc } from "firebase/firestore"; 
  import {Context}  from '@/pages/_app';
  import {createUserWithEmailAndPassword, } from 'firebase/auth';
  import {auth} from '@/config/firebase'
  import { useRouter } from 'next/router'
  
  export default function SignUpi() {
    const planCollection=collection(db,'plans')
    const router=useRouter();
    const [password,setPassword]=useState('')
    const {email,setEmail,description}=useContext(Context)
    console.log(description)
    const handleLogin=async()=>{
      try {
         const use=await createUserWithEmailAndPassword (auth, email, password)
      router.push('/')
      } catch (error) {
          console.log(error)
      }
    }

    const addPlan=async()=>{
      try {
        const planDoc = await addDoc(planCollection, {
          description,
          email,   
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  const funcWrapper=async()=>{
    await handleLogin()
    await addPlan() 
  }
    return (
      <Flex
        minH={'100vh'}
        width={'100vw'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={'white'}>Create your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel color={'white'}>Email address</FormLabel>
                <Input type="email" bg={'gray.800'} color={'white'} _placeholder={{ color: 'gray.300' }} border={'none'} defaultValue={email} onChange={(e)=>{
                  setEmail(e.target.value)
                  }}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel color={'white'}>Password</FormLabel>
                <Input type="password" bg={'gray.800'} color={'white'} border={'none'} onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox colorScheme={'white'} color={'white'}>Remember me</Checkbox>
                </Stack>
                <Button
                color={'white'}
                borderRadius={'none'}
                  bg={'#E50914'}
                  _hover={{
                    bg: '#e2e8f0'
                  }} onClick={funcWrapper}>
                  Sign up
                </Button>
              </Stack>
             
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  