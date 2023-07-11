import { VStack,Box } from "@chakra-ui/react";
import Banner from "@/comps/banner";
import Row from "@/comps/row";
import requests from "@/fetch/request";

export default function Home() {
  return (
    <>
 <Banner/>
 <VStack spacing={'3rem'}>
 <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
 <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
 <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
 <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
 <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
 <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
 <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
 <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
</VStack>
    </>
  )
}
