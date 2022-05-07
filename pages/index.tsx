import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed's */}

        {/* Widget's */}

      </main>
    </div>
  )
}

export default Home
