import { Container } from "@chakra-ui/react"
import cls from "./style.module.scss"
import { useState } from "react";
import image from "../../assets/images/Photo.png"

const Benif = () =>{
  return (
    <section className={cls.benifs}>
      <Container maxW="1312px">
        <div className={cls.body}>
          <span className={cls.Xlines}></span>
          <button className={`${cls.box}`} >
            <img className={cls.image} src={image} alt="" />
            <div className={`${cls.quarCircle1} ${cls.quarCircle}`}>
              <span>Легко начать</span>
            </div>
          </button>
          <button className={`${cls.box}`}>
            <img className={cls.image} src={image} alt="" />
            <div className={`${cls.quarCircle2} ${cls.quarCircle}`}>
              <span>Поддержка 24/7</span>
            </div>
          </button>
          <button className={`${cls.box}`}>
            <img className={cls.image} src={image} alt="" />
            <div className={`${cls.quarCircle3} ${cls.quarCircle}`}>
              <span>Безопасно</span>
            </div>
          </button>
          <button className={`${cls.box}`}>
            <img className={cls.image} src={image} alt="" />
            <div className={`${cls.quarCircle4} ${cls.quarCircle}`}>
              <span>Удобно</span>
            </div>
          </button>
        </div>
      </Container>
    </section>
  )
}
export default Benif