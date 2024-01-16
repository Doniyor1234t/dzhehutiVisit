import { Outlet } from "react-router-dom"
import Header from "../../components/Header/header"
import cls from "./style.module.scss"
import Footer from "../../components/Footer/Footer"
import { Box, Flex } from "@chakra-ui/react";
console.log(<Outlet/>);

const MainLayout = () => {
  return (
    <div className={cls.wrapper}>
      <Header />
      <main className={cls.main}>
        <Outlet />
      </main>
      <Footer />
    </div >
  )
}
export default MainLayout