import { Box, HStack, Heading, VStack } from '@chakra-ui/react'
import axios from '@/fetch/axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Row = ({title,fetchUrl,isLargeRow=false}) => {
    const [movies,setMovies] = React.useState([])
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl,{
                validateStatus: (status) => status >= 200 && status < 300
            });
           setMovies(request.data.results);
            return request;
        }
        fetchData();
     },[fetchUrl])
  return (
    <>
        <VStack spacing={'1rem'} alignItems={'flex-start'}>
            <Heading color={'whiteAlpha.700'} size={'md'}>{title} </Heading>
            <HStack spacing={'2rem'} overflow={'scroll'} css={{ '&::-webkit-scrollbar': { display: 'none' }}}>
            {movies.map(movie=>(
                <>
                <Image src={`https://image.tmdb.org/t/p/original${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} width={250} height={250} className='row_poster'></Image>
                </>
            ))}
            </HStack>
        </VStack>
    </>
  )
}

export default Row
