import { Box, Button, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import axios from '@/fetch/axios';
import requests from '@/fetch/request';
import React, { useEffect, useState } from 'react'
const Banner = () => {
    const [movie,setMovie]=useState([]);
 useEffect(()=>{
    async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOriginals,{
            validateStatus: (status) => status >= 200 && status < 300
        });
        setMovie([request.data.results[Math.floor(Math.random() * request.data.results.length-1)]])
        return request;
    }
    fetchData();
 },[])
  return (
    <>
    <HStack w={'100%'} bg={`linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original${movie[0]?.backdrop_path})`} backgroundSize="cover" backgroundPosition="center">
        <VStack  h={'40rem'} spacing={'1rem'} alignItems={'flex-start'} pl={'2.5rem'} w={'100%'}>

        <Heading color={'white'} pt={'12rem'} size={'2xl'} >{movie[0]?.name || movie[0]?.title || movie[0]?.original_name}</Heading>
        <HStack spacing={'1rem'}>
            <Button color={'white'} bg={'rgba(0, 0, 0, 0.5)'} w={'6rem'}>Play</Button>
            <Button color={'white'} bg={'rgba(0, 0, 0, 0.5)'} w={'6rem'}>My List</Button>
        </HStack>
        <Box w={{base:'70%',sm:'40%'}}>
        <Text color={'white'}>{movie[0]?.overview && movie[0].overview.length > 150
    ? movie[0].overview.slice(0, 150) + '...'
    : movie[0]?.overview}</Text>
    </Box>
        </VStack>
        
        </HStack>
       
    </>
  )
}

export default Banner
