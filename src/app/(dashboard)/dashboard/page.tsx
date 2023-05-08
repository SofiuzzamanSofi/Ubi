import { authOptions } from '@/workZone/components/libZone/authFn'
import { getServerSession } from 'next-auth'
import { FC } from 'react'

interface pageProps {

}

const Page = async ({ }) => {

    const session = await getServerSession(authOptions)
    return <pre>
        {JSON.stringify(session)}
    </pre>
}

export default Page