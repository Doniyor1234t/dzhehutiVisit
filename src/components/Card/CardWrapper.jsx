import Card from './Card'
import cls from './style.module.scss'
import db from "./carddb"

const CardWrapper = () => {
  return (
    <article className={cls.cardWrapper}>
      {db.map(card => {
        console.log(card);
        return (
          <Card title={card.title} rTitle={card.rTitle} text={card.text} key={card.id}/>

        )
      })}
    </article>
  )
}
export default CardWrapper