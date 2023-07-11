import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Flex,
} from '@chakra-ui/react';
import { color } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Head from 'next/head';
import {checkout} from '@/fetch/checkout'
import { useEffect, useRef, useState,useContext } from 'react';
import SignUpi from '@/comps/SignUpi';
import { Context } from '../_app';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Signup() {
  const {setDescription,description}=useContext(Context)
  const [id, setId] = useState('');
  useEffect(() => {
    const sessionId = window.location.search.match(/session_id=(.*)/)?.[1];
    const desc= window.location.search.match(/description=(.*)/)?.[1];
    if(desc==="Premium%20%20Plan")setDescription("Premium Plan")
    else if(desc==="Standard%20Plan")setDescription("Standard Plan")
    else if(desc==="Basic%20Plan")setDescription("Basic Plan")
    setId(sessionId);
  }, []);

  const handleCheckoutBasic = async () => {
   await checkout({
      lineItems: [{ price: 'price_1NSFRISDHJbreWjCu9w7z7RI', quantity: 1 }],
      description: 'Basic Plan',
    }
    );
   
    
  };

  const handleCheckoutPremium = () => {
    checkout({
      lineItems: [{ price: 'price_1NSFfzSDHJbreWjCBpx7APO9', quantity: 1 }],
      description: 'Premium  Plan',
    });
  };

  const handleCheckoutStandard = () => {
    checkout({
      lineItems: [{ price: 'price_1NSFiBSDHJbreWjCXy8BCP9u', quantity: 1}],
      description: 'Standard Plan',
    });
    
  };
  return (
    <>
    {id?<SignUpi/>:
    <Flex py={'7rem'} w={'100vw'} h={'100%'} direction={'column'} align={'center'} justify={'center'}>
    
    <VStack spacing={2} textAlign="center">
      <Heading as="h1" fontSize="4xl" color={'white'}>
        Plans that fit your need
      </Heading>
      <Text fontSize="lg" color={'gray.500'}>
        Start with 14-day free trial. No credit card needed. Cancel at
        anytime.
      </Text>
    </VStack>
    <Stack
      direction={{ base: 'column', md: 'row' }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
      py={10}>
      <PriceWrapper>
        <Box py={4} px={12} color={'white'}>
          <Text fontWeight="500" fontSize="2xl">
            Basic
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
              Rs
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              79
            </Text>
            <Text fontSize="3xl" color="gray.500">
              /month
            </Text>
          </HStack>
        </Box>
        <VStack
          bg={ 'gray.800' }
          color={'white'}
          py={4}
          borderBottomRadius={'xl'}>
          <List spacing={3} textAlign="start" px={12}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              unlimited build minutes
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Lorem, ipsum dolor.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              5TB Lorem, ipsum dolor.
            </ListItem>
          </List>
          <Box w="80%" pt={7}>
            <Button w="full" colorScheme="red" variant="outline" onClick={handleCheckoutBasic}>
              Start trial
            </Button>
          </Box>
        </VStack>
      </PriceWrapper>

      <PriceWrapper>
        <Box position="relative" >
          <Box
            position="absolute"
            top="-16px"
            left="50%"
            style={{ transform: 'translate(-50%)' }}>
            <Text
              textTransform="uppercase"
              bg={'#E50914'}
              px={3}
              py={1}
              color={'white'}
              fontSize="sm"
              fontWeight="600"
              rounded="xl">
              Most Popular
            </Text>
          </Box>
          <Box py={4} px={12} color={'white'}>
            <Text fontWeight="500" fontSize="2xl">
              Premium
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                Rs
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={ 'gray.800' }
          color={'white'}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" bg={'#E50914'} color={'white'} onClick={handleCheckoutPremium}>
                Start trial
              </Button>
            </Box>
          </VStack>
        </Box>
      </PriceWrapper>
      <PriceWrapper>
        <Box py={4} px={12} color={'white'}>
          <Text fontWeight="500" fontSize="2xl">
            Standard
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
              Rs
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              149
            </Text>
            <Text fontSize="3xl" color="gray.500">
              /month
            </Text>
          </HStack>
        </Box>
        <VStack
          bg={ 'gray.800' }
          color={'white'}
          py={4}
          borderBottomRadius={'xl'}>
          <List spacing={3} textAlign="start" px={12}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              unlimited build minutes
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Lorem, ipsum dolor.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              5TB Lorem, ipsum dolor.
            </ListItem>
          </List>
          <Box w="80%" pt={7}>
            <Button w="full" colorScheme="red" variant="outline" onClick={handleCheckoutStandard}>
              Start trial
            </Button>
          </Box>
        </VStack>
      </PriceWrapper>
    </Stack>
  </Flex>
    }
   
    </>
  );
}