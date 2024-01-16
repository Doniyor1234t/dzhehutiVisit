import { Container } from "@chakra-ui/react";
import MainImage from "../../assets/images/Main.png"
import React from "react";
import cls from "./style.module.scss"

const MainImg = () => {
  return (
  <div className={cls.mainimg}>
    <Container maxW="1312px">
      <img src={MainImage}  />
    </Container>
  </div>
  )
}
export default MainImg;