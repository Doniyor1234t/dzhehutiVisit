import {Navigation,Pagination,Scrollbar,A11y} from 'swiper/modules'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import cls from "./style.module.scss"
import profiles from './profildb'


import { Container, Icon } from "@chakra-ui/react"
import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
const Slider = () => {
  
  return (
    <section className={cls.slideSection}>
      <Container maxW="1312px">
          <div className={cls.slideHead}>
            <h3 className={cls.title}>Нам доверяют</h3>
          </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={2.5}
          navigation={{
            nextEl: 'nextArr',
            prevEl: 'prevArr'
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className={cls.slideBody}
          watchOverflow={false}
        >
        <div className={cls.navigation}>
          <button className={`prevArr`}>
            <Icon as={GoArrowLeft} h={'24px'} w={'24px'}/>
          </button>
          <button className={`nextArr`}>
            <Icon as={GoArrowRight} h={'24px'} w={'24px'}/>
          </button>
        </div>
          {profiles.map((profile) => {
            return (
              <SwiperSlide className={cls.slide} key={profile.id}>
                <div className={cls.slideCard}>
                  <div className={cls.comment}>{profile.comment}</div>
                  <div className={cls.profile}>
                    <div className={cls.avatar}>
                      <img src={profile.avatar} alt="" />
                    </div>
                    <div className={cls.content}>
                      <div className={cls.fullName}>{profile.fullname}</div>
                      <div className={cls.brandName}>{profile.brandName}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
    </section>
  )
}
export default Slider