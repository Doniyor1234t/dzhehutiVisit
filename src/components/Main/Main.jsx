import { Box, Center, Container, Heading } from "@chakra-ui/react"
import cls from './style.module.scss'
import Button from "../Button/Button"

const MainLand = () => {
  return (
    <Box className={cls.wrapper} m={"152px 0 0px 0"}>
      <Container maxW="1312px">
        <Center className={cls.block} display={"flex"} flexDirection={"column"} gap={"40px"}>
          <Box className={cls.body}>
            <h1 className={cls.title}>Онлайн-опросы на ладони: быстро, эффективно, без посредников</h1>
          </Box>
          <Button label="Попробовать бесплатно" size="bg"/>
        </Center>
      </Container>
    </Box>
  )
}
export default MainLand