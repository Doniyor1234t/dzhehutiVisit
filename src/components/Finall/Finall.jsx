import { Container } from '@chakra-ui/react'
import cls from './style.module.scss'
import image from "../../assets/images/Dashboard.png"
import Button from '../Button/Button'

const Finall = () => {
  return(
    <section className={cls.finall}>
      <Container maxW={"1312px"}>
        <div className={cls.body}>
          <div className={cls.content}>
            <h3 className={cls.title}>Получите глубокий анализ ваших данных с помощью Dzhehuti. </h3>
            <div className={cls.text}>Продемонстрируйте инструмент для углубленного анализа данных с примерами визуализаций и инсайтов, которые могут быть получены.</div>
            <Button className={cls.btn} label="Попробовать бесплатно" bg={"dark"} size="bg"/>
          </div>
          <div className={cls.dashboardImg}>
            <img src={image} alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}
export default Finall