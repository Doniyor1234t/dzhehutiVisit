import { Link } from "react-router-dom"
import Logo from "../../assets/Icons/Logo"
import cls from "./style.module.scss"
import { Box, Container, Tab, TabList, Tabs } from "@chakra-ui/react"
import Button from '../../components/Button/Button'

const Header = () => {
  return (
    <header className={cls.header}>
      <Container maxW="1280px">
        <Box className={cls.body}>
          
          <Link className={cls.header__logo} to={"/"}>
            <Logo />
          </Link>

          <nav variant='unstyled' className={cls.header__menu}>
            <ul className={cls.header__list}>
              <li><Link className={cls.header__link}>Продукты</Link></li>
              <li><Link className={cls.header__link}>Опрос</Link></li>
              <li><Link className={cls.header__link}>Обратная связь</Link></li>
              <li><Link className={cls.header__link}>Частые вопросы</Link></li>
            </ul>
          </nav>

          <Box className={cls.header__right}>
            <Link className={cls.header__link}>Войти</Link>
            <Button label="Демо версия" size="sm"/>
          </Box>

        </Box>
      </Container>
    </header>
  )
}

export default Header