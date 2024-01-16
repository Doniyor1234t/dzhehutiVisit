import cls from './style.module.scss'

const Button = ({label,icon,size}) => {
  return (
    <button className={`${cls.button} ${size==="sm" && cls.sm} ${size == "lg" && cls.lg} ${size == "bg" && cls.bg}`}>
      {icon && <span>{icon}</span>}
      <span className={cls.label}>{label}</span>
    </button>
  )
}
export default Button