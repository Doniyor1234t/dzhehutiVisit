import { Checkbox, Container, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Link, border  } from '@chakra-ui/react';
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '../../assets/Icons/LogoBg.svg'
import cls from './style.module.scss';

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <Container maxW="1312px">
        <div className={cls.body}>
          <div className={cls.left}>
            <div className={cls.formSide}>
              <FormControl className={cls.form}>
                <FormLabel fontSize={"32px"} m={'0'} className={cls.title}>Подпишитесь на нашу рассылку, чтобы больше узнать о Dzhehuti!</FormLabel>
                <InputGroup className={cls.inputG} m={"24px 0 16px 0"}>
                  <Input  
                    fontSize={'15px'} 
                    fontWeight={"400"}
                    fontFamily={"VisbyCF"}
                    color={"#fff"} 
                    border={'none'} 
                    borderRadius={"none"}
                    borderBottom={"1px solid rgba(161, 169, 184, 0.15)"}
                    p={'12px 0'} 
                    _focusVisible={{
                      borderBottomColor:'#fff',
                    }}
                    type='email' 
                    placeholder='Электронная почта*'
                  />
                  <InputRightElement >
                    <Icon color={"#858FA3"} as={FaArrowRightLong} />
                  </InputRightElement>
                </InputGroup>
                <Checkbox alignItems={'flex-start'} className={cls.checkbox}>Нажимая на кнопку отправить вы соглашаетесь с <Link> политикой конфиденциальности и пользовательским соглашением</Link></Checkbox>
              </FormControl>
            </div>
            <div className={cls.logo}>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className={cls.right}>
            <div className={cls.box}>
              <div className={cls.menu}>
                <div className={cls.label}>Решения</div>
                <ul className={cls.list}>
                  <li className={cls.link}><Link>Исследование</Link></li>
                  <li className={cls.link}><Link>Тестирование</Link></li>
                  <li className={cls.link}><Link>Онлайн опрос</Link></li>
                  <li className={cls.link}><Link>Свой опрос</Link></li>
                  <li className={cls.link}><Link>Все решения</Link></li>
                </ul>
              </div>
              <div className={cls.menu}>
                <div className={cls.label}>Компания</div>
                <ul className={cls.list}>
                  <li className={cls.link}><Link>О нас</Link></li>
                  <li className={cls.link}><Link>Контакты</Link></li>
                  <li className={cls.link}><Link>Вакансии</Link></li>
                  <li className={cls.link}><Link>Помощь</Link></li>
                </ul>
              </div>
            </div>
            <div className={cls.box}>
              <div className={cls.menu}>
                <ul className={cls.list}>
                  <li className={cls.link}><Link>Linkedin</Link></li>
                  <li className={cls.link}><Link>Instagram</Link></li>
                  <li className={cls.link}><Link>Twitter</Link></li>
                  <li className={cls.link}><Link>Facebook</Link></li>
                </ul>
              </div>
              <div className={cls.menu}>
                <ul className={cls.list}>
                  <li className={cls.link}>+998 (91)-775-09-78</li>
                  <li className={cls.link}>Uzbekistan, Tashkent</li>
                  <li className={cls.link}>Chirchik. 87</li>
                </ul>
              </div>
            </div>
            <div className={cls.text}>© 2024. Dzhehuti All Rights Reserved.</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer