import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import Fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'
const index = (props)=>{

  return(
    <Layout>
  <div>
  
      
  <h1>Welcome to Bitcoin money tracking</h1>
  <p>Check current Bitcoin rate</p>
   <Prices bpi={props.bpi}/>
    
  </div>
  </Layout>
  )
}

index.getInitialProps = async function(){

  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json();

  return{
    bpi: data.bpi
  }
}
export default index