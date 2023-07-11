import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { ChakraProvider } from '@chakra-ui/react'
import NextNProgress from "nextjs-progressbar";
import Layout from '@/comps/layout'
import { createContext, use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
export const Context=createContext({email:'',user:{},description:""});
export default function App({ Component, pageProps }) {
  const [user,setUser]=useState({});
  const [description,setDescription]=useState("");
  const router=useRouter()
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(((userAuth)=>{
      if(userAuth){
        setUser(userAuth)
        
      }
      else{
        //logged out
        if (window.location.pathname !== "/login/register") {
          router.push("/login");
        }
      }
      return unsubscribe;
    }))
  },[])
  const [email,setEmail] = useState('');
  return (
   
    <Context.Provider value={{email,setEmail,user,setUser,description,setDescription}}>
     <Provider store={store}>
    <ChakraProvider>
    <Layout>
    <NextNProgress options={{showSpinner:false}}/>
  <Component {...pageProps} />
  </Layout>
  </ChakraProvider>
  </Provider>
  </Context.Provider>
  )
}
