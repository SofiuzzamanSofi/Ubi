"use client"


import { FC } from 'react'
import { Toaster } from 'react-hot-toast'

interface providersProps {

}

const Providers: FC<providersProps> = ({ }) => {
    return <>
        <Toaster position='top-center' reverseOrder={false} />
    </>
}

export default Providers