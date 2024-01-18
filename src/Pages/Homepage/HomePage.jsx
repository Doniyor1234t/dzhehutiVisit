import MainLand from "../../components/Main/Main"
import MainImg from "../../components/MainImg/MainImg"
import Result from "../../components/Result/Result"
import CardWrapper from "../../components/Card/CardWrapper.jsx"
import Client from "../../components/Clients/ClientSection.jsx"
import Benif from "../../components/Benefits/Benefits.jsx"
import Slider from "../../components/SliderOpinion/Slider.jsx"
import Faqs from "../../components/Faqs/Faqs.jsx"
import Finall from "../../components/Finall/Finall.jsx"

const HomePage = () => {
  return (
    <>
      <MainLand/>
      <MainImg/>
      <Result/>
      <CardWrapper/>
      <Client/>
      <Benif />
      <Slider />
      <Faqs />
      <Finall />
    </>
  )
}
export default HomePage