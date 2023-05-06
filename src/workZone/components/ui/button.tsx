import { ButtonPropsTypes, buttonVariants } from '@/workZone/typesInterface/buttonTypes'
import { Loader2 } from 'lucide-react';
import { FC } from 'react'
import { cn } from '../libZone/utilsFn';



const Button: FC<ButtonPropsTypes> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return <button
    className={cn(buttonVariants({ variant, size, className }))}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
    {children}
  </button>
}

export default Button;