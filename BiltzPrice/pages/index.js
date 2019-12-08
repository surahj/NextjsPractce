import React from 'react'
import Layout from '../components/Layout'
import Fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'


const Home = (props) => (
  <Layout>
  <div>
   
    <div className="hero">
      <h1 className="title">Welcome to BiltzPrice</h1>
      <p className="description">
        check the price of Bitcoin
      </p>    
      <Prices bpi={props.bpj}/>
    </div> 
    
  </div>
  </Layout>
)
Home.getInitialProps = async function(){
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpj:data.bpi
  }
}

export default Home
