import { Container, Text } from "@chakra-ui/react"
import cls from "./style.module.scss"
import image from "../../assets/images/Photo.png"

const Client = () => {
  return (
    <section className={cls.client}>
      <Container maxW='1312px'>
        <div className={cls.body}>
          <div className={cls.content}>
            <h3 className={cls.title}>Клиенты и партнеры</h3>
            <Text className={cls.text}>Более 80% наших клиентов - работают с нами уже более 5 лет</Text>
          </div>
          <div className={cls.galery}>
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
            <img src={image} alt="Client" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Client