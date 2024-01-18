import { Link } from "react-router-dom"
import Logo from "../../assets/Icons/Logo"
import cls from "./style.module.scss"
import { Box, Container, Icon, Tab, TabList, Tabs } from "@chakra-ui/react"
import { GoGlobe } from "react-icons/go";

import Button from '../../components/Button/Button'

const Header = () => {
  return (
    <header className={cls.header}>
      <Container maxW="1280px" className={cls.container}>
        <Box className={cls.body}>
          
          <Link className={cls.header__logo} to={"/"}>
            <Logo />
          </Link>

          <Box className={cls.header__right}>
            <nav variant='unstyled' className={cls.header__menu}>
              <ul className={cls.header__list}>
                <li className={cls.item}><Link className={cls.header__link}>О нас</Link></li>
                <li className={cls.item}><Link className={cls.header__link}>О продукте</Link></li>
                <li className={cls.item}><Link className={cls.header__link}>Тарифы</Link></li>
                <li className={cls.item}><Link className={cls.header__link}>Решения</Link></li>
              </ul>
            </nav>

            <Link className={cls.login}>Войти</Link>
            <button className={cls.demoLink}>
              <span>Демо версия</span>
            </button>
            <button className={cls.lang}>
              <Icon as={GoGlobe} h="24px" w="24px"/>
            </button>
          </Box>

        </Box>
      </Container>
    </header>
  )
}

export default Header