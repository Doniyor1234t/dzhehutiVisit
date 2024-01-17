import Card from './Card'
import cls from './style.module.scss'
import db from "./carddb"

const CardWrapper = () => {
  return (
    <section className={cls.cardWrapper}>
      {db.map(card => {
        return (
          <Card title={card.title} rTitle={card.rTitle} text={card.text} key={card.id}/>

        )
      })}
    </section>
  )
}
export default CardWrapper