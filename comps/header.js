import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import a from '../public/netflix.svg'
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Context } from '@/pages/_app';
import { auth } from '@/config/firebase';
import { signOut } from 'firebase/auth';



export default function Nav() {
  const router=useRouter()
  const { user, setUser } = useContext(Context);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);



  const logoutHandler=()=>{
    signOut(auth).then(() => {  
      router.push('/login')
    }).catch((error) => {
      console.log(error);
    });
    }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Box bg={isScrolled ? 'black' : 'transparent'} px={4} position={'fixed'} w={'100%'}  style={{
          transitionProperty: 'background-color',
          transitionDuration: '0.8s',
          transitionTimingFunction: 'ease',
          zIndex: '100'
        }}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg={isScrolled ? 'black' : 'transparent'}
            color={'white'}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box pl={{base:0,md:'2.5rem'}}><Image src={a} alt="netflix_logo" width={100} height={100}/></Box>
          
          </HStack>
          <Flex alignItems={'center'}>
          {auth.currentUser?<Menu >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
               <Link href='/profile'><MenuItem>Profile</MenuItem></Link>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>:<Button bg={'#E50914'} color={'white'} borderRadius={'none'} onClick={()=>router.push('/signin')}>Sign In</Button>}
                
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            
          </Box>
        ) : null}
      </Box>
    </>
  );
}