import Nav from './Nav'
import Head from 'next/head'
const Layout = (props)=> (
    <div>
    <Head>
      <title>BiltzPrice</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel='stylesheet' href='https://bootswatch.com/4/litera/bootstrap.min.css'/>
    </Head>
        <Nav />
        <div className='container'>
        {props.children}
        </div>
        
    </div>
)

export default Layout