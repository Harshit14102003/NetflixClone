import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, HStack, Heading, Input, Text, VStack, color, position } from '@chakra-ui/react'
import React, {  useContext, useState } from 'react'
import a from '@/public/netflix-bg.jpg'
import Image from 'next/image'
import SignIn from '@/comps/signIn'
import {Context}  from '@/pages/_app'

const login = () => {
  const {setEmail,email}=useContext(Context)
  const [signIn,setSignIn] = useState(false);
  return (
    <>
    <Flex >
    {signIn?(<SignIn/>):
    <div style={{ position: 'relative',display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw',overflow:'hidden' ,zIndex:1}}>
      <Image src={a} style={{ height: '100vh' ,width:'100vw',objectFit:"fill"}}/>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.4) linear-gradient(to top, rgba(0, 0, 0, 0.8) 0,rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)', 
        }}
      >
      
      <VStack spacing={'1.5rem'} color={'white'}>
      <Heading size={{base:'lg',lg:'2xl' ,md:'2xl'}} color={'white'} noOfLines={2} ml={'2rem'} textAlign={'center'} mr={'2rem'}>
        Unlimited Movies, TV shows, and more.
      </Heading>
      <Heading color={'white'} size={{base:'md',lg:'md' ,md:'md'}} fontWeight={500}>Watch anywhere. Cancel anytime</Heading>
      <Text color={'white'} fontSize={{base:'sm',lg:'sm' ,md:'sm'}} fontWeight={300} textAlign={'center'} noOfLines={2} ml={'3rem'} mr={'3rem'}>Ready to watch? Enter your email to create or restart your membership.</Text>
     <Flex>
      <FormControl>
  <FormLabel textAlign={'center'}>Email address</FormLabel>
  <Input type='email' onChange={(e)=>setEmail(e.target.value)}  w={{base:'40vw',lg:'30vw',md:'30vw'}} borderRadius={0} h={{base:'1.8rem',lg:'2.5rem',md:'2.5rem'}} backgroundColor={'white'} color={'black'}/><Button bgColor={'#E50914'} color={'white'} w={{base:'25vw', md:'20vw' ,lg:'15vw'}} borderRadius={0} h={{base:'1.8rem',lg:'2.5rem',md:'2.5rem'}} mt={'-0.2rem'} fontSize={{base:'0.7rem',md:'1rem',lg:'1rem'}} onClick={()=>setSignIn(true)}>Get Started</Button>
</FormControl>
</Flex>
      </VStack>
      </div>
    </div>
    }
    
  </Flex>
  </>
  )
}

export default login
