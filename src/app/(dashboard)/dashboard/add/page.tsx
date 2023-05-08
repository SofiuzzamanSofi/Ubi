import { FC } from 'react'

interface pageProps {

}

const Page: FC<pageProps> = ({ }) => {
    return <main
        className='pt-8'
    >
        <h1
            className='font-bold text-5xl mb-8'
        >
            Add a friend
        </h1>
    </main>
}

export default Page