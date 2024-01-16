import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Logo from "../../assets/Icons/Logo"
import cls from "./style.module.scss"

const Result = () => {
  return (
    <section className={cls.res}>
      <Container className={cls.container} maxW="1312px">
        <Flex>
          <Box className={cls.box}>
            <Logo/>
          </Box>
          <Box className={cls.box}>
            <Text className={cls.text}>
              Это онлайн платформа которая предоставляет пользователям инструменты для проведения глубокого анализа данных, создания опросов и получения ценных инсайтов, не выходя из браузера.
            </Text>
            <Box className={cls.info}>
              <div className={cls.resNum}>
                <div className={cls.num}>
                  <span>+</span>900
                </div>
                <div className={cls.numInfo}>
                  Реализованных проектов
                </div>
              </div>
              <div className={cls.resNum}>
                <div className={cls.num}>
                  <span>{">"}</span>17
                </div>
                <div className={cls.numInfo}>
                  лет на рынке
                </div>
              </div>
              <div className={cls.resNum}>
                <div className={cls.num}>
                  24<span>{"/"}</span>7
                </div>
                <div className={cls.numInfo}>
                  сервис
                </div>
              </div>
            </Box>
          </Box>
        </Flex>
      </Container>

    </section>
  )
}
export default Result