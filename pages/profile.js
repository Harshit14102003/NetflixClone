import { auth } from '@/config/firebase'
import { Flex, VStack,HStack ,Box,Avatar, Text, Button} from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {useRouter  } from "next/router";
import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useContext } from 'react';
import { Context } from './_app';

const profile = () => {
  const {user} =useContext(Context)
  const [foo,setFoo]=useState('')
    const router=useRouter();
    const signOutHandler=()=>{
        signOut(auth).then(() => {  
          router.push('/login')
        }).catch((error) => {
          console.log(error);
        })
        ;
        }
      
        const readPlan=async()=>{
     
          try {
            const plansCollectionRef = collection(db, 'plans');
      const querySnapshot = await getDocs(query(plansCollectionRef, where('email', '==',user?.email)));
      setFoo(querySnapshot.docs[0].data().description)
          } catch (error) {
            console.log(error)
          }
        }
        useEffect(()=>{
          readPlan();
        },[user])
  return (
    <>
       <Flex bg={'black'} w={'100vw'} h={'100vh'} color={'white'} align={'center'} justify={'center'} direction={'column'}>
<HStack>
<Image src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'} width={70} height={70}/>
<VStack>
<Flex bg={'gray.800'} w={{lg:'30rem',sm:'15rem',md:'15rem'}} textAlign={'start'} height={'2rem'} pl={'1rem'} alignItems={'center'}>{auth.currentUser?.email}</Flex>
<Text w={{lg:'30rem',sm:'15rem',md:'15rem'}} textAlign={'start'} height={'2rem'} pl={'1rem'} borderBottom={'1px'} borderBottomColor={'gray.700'}>Your Current Plan-{ foo}</Text>
</VStack>
       </HStack>
       <VStack mt={'5rem'} >
        <Button w={{lg:'30rem',sm:'15rem',md:'15rem'}} bg={'#E50914'} color={'white'} onClick={signOutHandler}>Sign Out</Button>
       </VStack>
       </Flex>
    </>
  )
}

export default profile
