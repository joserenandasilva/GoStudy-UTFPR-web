import { Box, Flex,Grid,GridItem,Text, Button } from "@chakra-ui/react"
import Header from '../components/MainPage/Header'
import Reservas from "../components/MainPage/Reservas"
import Informacoes from "../components/MainPage/Informacoes"
export default function Main() {
  return (
      <Box bgColor={"#E5E5E5"} width={'100%'} height={'100vh'}>
        <Header/>
        <Box p={4} >
          <Reservas/>
          <Informacoes/>
        </Box>
      </Box>    
  )
}
