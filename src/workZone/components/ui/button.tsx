
import { ButtonPropsTypes } from '@/workZone/typesInterface/buttonTypes'
import { FC } from 'react'



const Button: FC<ButtonPropsTypes> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return <button
    className=''
    disabled={isLoading}
    {...props}
  >

  </button>
}

export default Button;