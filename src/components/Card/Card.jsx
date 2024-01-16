import { Box, Container, Text } from "@chakra-ui/react"
import cls from "./style.module.scss"
import Img from "../../assets/images/Photo.png"
import Button from "../Button/Button"

const Card = ({title, text, rTitle}) => {
  return (
    <article className={cls.card}>
      <Container maxW="1312px">
          <div className={cls.head}>
            <Text className={cls.mTitle}>возможности платформы</Text>
          </div>
          <div className={cls.body}>
            <Box className={cls.box}>
              <h2 className={cls.title}>{title}</h2>
              <div className={cls.img}>
                <img src={Img} alt="" />
              </div>
            </Box>
            <Box className={cls.box}>
              <div className={cls.wrapper}>
                <h3 className={cls.rTitle}>{rTitle}</h3>
                <Text className={cls.text}>{text}</Text>
                <Button label="Попробовать бесплатно" size="bg" />
              </div>
              <div className={cls.wrapper}>
                <h3 className={cls.rTitle}>Особенности:</h3>
                <ul className={cls.list}>
                  <li>Преимущество этой возможности</li>
                  <li>Преимущество этой возможности</li>
                  <li>Преимущество этой возможности</li>
                  <li>Преимущество этой возможности</li>
                </ul>
              </div>
            </Box>
          </div>
      </Container>
    </article>
  )
}
export default Card